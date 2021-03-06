import React, { useEffect, useState } from 'react';
import './Profile.scss'

import pen from '../../assets/svg/editing.svg';
import CloseIcon from '../../assets/svg/close.svg';
import calendar from '../../assets/svg/calendar.svg';
import marker from '../../assets/svg/location.svg';
import Avatar from '../../assets/svg/avatar.svg';
import CompanyAvatar from '../../assets/svg/company.svg';
import EmailIcon from '../../assets/svg/email.svg';
import Phone from '../../assets/svg/phone.svg';
import People from '../../assets/svg/people.svg';
import Www from '../../assets/svg/www.svg';
import ProfileNotComplete from '../../assets/svg/Profile/profile-not-complete.svg';
import NoJobOffers from '../../assets/svg/Profile/no-job-offers.svg';
import Star from '../../assets/svg/Profile/star.svg';

import ProfileModal from './editModals/ProfileModal/ProfileModal';
import { useSelector } from 'react-redux';
import { userData } from '../../slices/user/userSlice';
import { useHistory, useParams } from 'react-router-dom';
import LoadingPopup from '../popups/loading/LoadingPopup';
import { getUserProffession } from '../../logic/user/proffessions/proffessions';
import { useDispatch } from 'react-redux';
import { proffessionData } from '../../slices/proffessions/proffessionSlice';
import { getUserInfoByID } from '../../logic/user/info/getUserInfo';
import { searchData, setSearchInfo } from '../../slices/searchresults/searchResultSlice';
import { updateKnowledgeJobExtra } from '../../logic/user/info/updateProfileInfo';
import { NewChat } from '../../logic/chat/chatOptions';
import { socketData } from '../../slices/socket/socketSlice';
import { chatData } from '../../slices/chat/chatSlice';
import { getCompanysPositions } from '../../logic/company/find/findCompanysPositions';
import CompanyJob from './companyJobs/CompanyJob';
import { languageData } from '../../slices/languages/languageSlice';

function Profile(){
    const [editProfile, setEditProfile] = useState(false);
    const [isUsersProfile, setIsUsersProfile] = useState(false);
    const [editingKnowledge, setEditingKnowledge] = useState(false);
    const [editingLastJob, setEditingLastJob] = useState(false);
    const [editingExtraSkills, setEditingExtraSkills] = useState(false);
    const [hasChat, setHasChat] = useState(null);
    const [companyPositions, setCompanyPositions] = useState(null);

    const {searchID} = useParams()

    const userInfo = useSelector(userData);
    const chatInfo = useSelector(chatData);
    const searchInfo = useSelector(searchData);
    const socketInfo = useSelector(socketData);
    const proffessionInfo = useSelector(proffessionData);
    const languageInfo = useSelector(languageData);
    const history = useHistory();
    const dispatch = useDispatch();

    const [editLastJob, setEditLastJob] = useState("");
    const [editKnowledge, setEditKnowledge] = useState("");
    const [editExtraSkills, setEditExtraSkills] = useState("");

    useEffect(() => {
        if(!userInfo.loggedIn){
            history.push("/");
        }
    }, [history, userInfo.loggedIn]);

    useEffect(() => {
        if(chatInfo.chats && searchInfo.info && hasChat === null){
            setHasChat(chatInfo.chats.some(c => c.users.includes(searchInfo.info.id.toString())));
        }
    }, [chatInfo.chats, searchInfo.info, hasChat]);

    useEffect(() => {
        if(searchInfo.info){
            setEditLastJob(searchInfo.info.profile.experience);
            setEditKnowledge(searchInfo.info.profile.knowledge);
            setEditExtraSkills(searchInfo.info.profile.extra);
        }
    }, [searchInfo.info]);

    useEffect(() => {
        if(userInfo.info){
            if(userInfo.info.id === parseInt(searchID)){
                dispatch(setSearchInfo(userInfo.info));
                setIsUsersProfile(true);
            }else{
                getUserInfoByID(searchID, dispatch);
                setIsUsersProfile(false);
            }
        }
    }, [userInfo.info, searchID, dispatch, proffessionInfo.proffessions]);

    useEffect(() => {
        if(searchInfo.info && !searchInfo.info.is_employer){
            getUserProffession(searchInfo.info.profile.profession_aka_activity, dispatch, proffessionInfo.proffessions)
        }
    }, [searchInfo.info, dispatch, proffessionInfo.proffessions]);

    useEffect(() => {
        if(searchInfo.info && searchInfo.info.is_employer && !companyPositions){
            getCompanysPositions(searchInfo.info.profile.id, setCompanyPositions);
        }
    }, [searchInfo.info, companyPositions]);

    const handleProfileModal = () => {
        setEditProfile(!editProfile)
    }

    const ProfileMiddleRow = ({ icon, iconAlt, title, value }) => {
        return (
            <div className="profile__left__middle__row">
                <div>
                    <img src={icon} alt={iconAlt} />
                    <p>{title}</p>
                </div>
                <p>{value}</p>
            </div>
        );
    }

    if(searchInfo.info){
        if(searchInfo.info.is_employer){
            return (
                <div className="profile company">
                    {editProfile && <ProfileModal handleProfileModal={handleProfileModal} /> }
                    <div className="profile__left">
                        <div className="profile__left__top">
                            <div className="profile__left__top__img-wrapper">
                                <img src={searchInfo.info.profile.logo ? searchInfo.info.profile.logo : CompanyAvatar} alt="avatar" />
                                <div className='onlineStatus' id={socketInfo.onlineUsers && socketInfo.onlineUsers.some(s => s.userId === searchInfo.info.id) ? 'online' : 'offline'}></div>
                            </div>
                            <div className="profile__left__top__info">
                                <div>
                                    <p>{searchInfo.info.profile.company_name}</p>
                                </div>
                                {!isUsersProfile && userInfo.info.id && searchInfo.info.id && hasChat !== null && (
                                    <button
                                        onClick={() => {
                                            if(hasChat){
                                                history.push("/chat")
                                            }else{
                                                NewChat(userInfo.info.id, searchInfo.info.id, history, dispatch);
                                            }
                                        }}
                                    >{hasChat ? languageInfo.text.profile.chat1 : languageInfo.text.profile.chat2}</button>
                                )}
                            </div>
                            {isUsersProfile && (
                                <img onClick={handleProfileModal} className='profile__left__top__change-info' src={pen} alt="pen" />
                            )}
                        </div>

                        <div className="profile__left__middle">
                            <ProfileMiddleRow icon={Www} iconAlt="www" title={languageInfo.text.profile.jobGiver.homePage} value={searchInfo.info.profile.website_url ? searchInfo.info.profile.website_url : languageInfo.text.profile.none} />
                            <ProfileMiddleRow icon={People} iconAlt="people" title={languageInfo.text.profile.jobGiver.employeeCount} value={searchInfo.info.profile.company_size ? searchInfo.info.profile.company_size : languageInfo.text.profile.unknown1} />
                            <ProfileMiddleRow icon={Phone} iconAlt="phone" title={languageInfo.text.profile.jobGiver.phoneNum} value={searchInfo.info.profile.phone_number ? searchInfo.info.profile.phone_number : languageInfo.text.profile.none} />
                            <ProfileMiddleRow icon={EmailIcon} iconAlt="email" title={languageInfo.text.profile.jobGiver.email} value={searchInfo.info.email ? searchInfo.info.email : languageInfo.text.profile.none} />
                            <ProfileMiddleRow icon={marker} iconAlt="marker" title={languageInfo.text.profile.jobGiver.location}
                                value={(!searchInfo.info.profile.city && !searchInfo.info.profile.country) ? languageInfo.text.profile.unknown2 : 
                                <>
                                    {(searchInfo.info.profile.country && searchInfo.info.profile.city) ? `${searchInfo.info.profile.country}, ${searchInfo.info.profile.city}` :
                                    <>
                                        {searchInfo.info.profile.country ? searchInfo.info.profile.country : ''}
                                        {searchInfo.info.profile.city ? searchInfo.info.profile.city : ''}
                                    </>}
                                </>}
                            />
                        </div>

                        <div className="profile__left__bottom">
                            <div className="profile__left__bottom__my-desc">
                                <p className='profile__left__bottom__my-desc__title'>{languageInfo.text.profile.jobGiver.description}</p>
                                <p className='profile__left__bottom__my-desc__desc'>
                                    {searchInfo.info.profile.description ? searchInfo.info.profile.description : languageInfo.text.profile.jobGiver.noDescription}
                                </p>
                            </div>
                        </div>
                    </div>
                    {companyPositions && (
                        <div className="profile__companyRight">
                            {isUsersProfile &&
                                <div className="profile__companyRight__create-job-button">
                                    <button onClick={() => history.push('/new/jobOffer')}>{languageInfo.text.profile.jobGiver.newJobOffer}</button>
                                </div>
                            }
                            {companyPositions.length > 0 ?
                                <>
                                    <h2 className="profile__companyRight__title">{languageInfo.text.profile.jobGiver.jobOffers}</h2>
                                    <div className="profile__companyRight__scroll">
                                        {companyPositions.map((possition, i) => {
                                            return (
                                                <CompanyJob 
                                                    key={i}
                                                    info={possition}
                                                />
                                            )
                                        })}
                                    </div>
                                </> :
                                <div className="profile__right__no-details">
                                    <h3>{languageInfo.text.profile.jobGiver.noJobOffers}</h3>
                                    <img src={NoJobOffers} alt="profile" />
                                </div>
                            }
                        </div>
                    )}
                </div>
            )
        }else{
            return (
                <div className="profile">
        
                    {editProfile && <ProfileModal handleProfileModal={handleProfileModal} /> }
        
                    <div className="profile__left">
        
                        <div className="profile__left__top">
                           
                            <div className="profile__left__top__img-wrapper">
                                <img src={searchInfo.info.profile.photo ? searchInfo.info.profile.photo : Avatar} alt="avatar" />
                                <div className='onlineStatus' id={socketInfo.onlineUsers && socketInfo.onlineUsers.some(s => s.userId === searchInfo.info.id) ? 'online' : 'offline'}></div>
                            </div>
                            <div className="profile__left__top__info">
                                <div>
                                    <p>{searchInfo.info.first_name} {searchInfo.info.last_name} <span>{searchInfo.info.profile.is_active_jobseeker && languageInfo.text.profile.jobSeeker.activeJobSeeker}</span> </p>
                                    {searchInfo.info.profile.jobCategory && searchInfo.info.profile.job ? (
                                        <small>{`${searchInfo.info.profile.jobCategory} | ${searchInfo.info.profile.job}`}</small>
                                    ) : searchInfo.info.profile.job && (
                                        <small>{searchInfo.info.profile.job}</small>
                                    )}
                                </div>
                                {!isUsersProfile && userInfo.info.id && searchInfo.info.id && hasChat !== null && (
                                    <button
                                        onClick={() => {
                                            if(hasChat){
                                                history.push("/chat")
                                            }else{
                                                NewChat(userInfo.info.id, searchInfo.info.id, history, dispatch);
                                            }
                                        }}
                                    >{hasChat ? languageInfo.text.profile.chat1 : languageInfo.text.profile.chat2}</button>
                                )}
                            </div>
                            {isUsersProfile && (
                                <img onClick={handleProfileModal} className='profile__left__top__change-info' src={pen} alt="pen" />
                            )}
                        </div>
        
                        <div className="profile__left__middle">
                            <ProfileMiddleRow icon={calendar} iconAlt="calendar" title={languageInfo.text.profile.jobSeeker.birthDate} value={searchInfo.info.profile.birth_date ? searchInfo.info.profile.birth_date : languageInfo.text.profile.unknown1} />
                            <ProfileMiddleRow icon={marker} iconAlt="location" title={languageInfo.text.profile.location}
                                value={(!searchInfo.info.profile.city && !searchInfo.info.profile.country) ? languageInfo.text.profile.unknown2 : 
                                <>
                                    {(searchInfo.info.profile.country && searchInfo.info.profile.city) ? `${searchInfo.info.profile.country}, ${searchInfo.info.profile.city}` :
                                    <>
                                        {searchInfo.info.profile.country ? searchInfo.info.profile.country : ''}
                                        {searchInfo.info.profile.city ? searchInfo.info.profile.city : ''}
                                    </>}
                                </>}
                            />
                            <ProfileMiddleRow icon={Star} iconAlt="star" title={languageInfo.text.profile.jobSeeker.stars} value="0" />
                        </div>
        
                        <div className="profile__left__bottom">
                            <div className="profile__left__bottom__my-desc">
                                <p className='profile__left__bottom__my-desc__title'>{languageInfo.text.profile.jobSeeker.description}</p>
                                <p className='profile__left__bottom__my-desc__desc'>{searchInfo.info.profile.bio ? searchInfo.info.profile.bio : languageInfo.text.profile.none}</p>
                            </div>
                        </div>
        
                    </div>
        
                    {
                        searchInfo.info.profile.knowledge || 
                        searchInfo.info.profile.experience || 
                        searchInfo.info.profile.extra || 
                        isUsersProfile ? (
                            <div className="profile__right">
                                <section className="profile__right__section">
                                    <div className="profile__right__section__header">
                                        <p className="profile__right__section__header__title">{languageInfo.text.profile.jobSeeker.education}</p>
                                        {isUsersProfile && searchInfo.info.profile.knowledge && searchInfo.info.profile.knowledge !== '' &&
                                            <img className='profile__right__section__header__edit' src={editingKnowledge ? CloseIcon : pen} alt="edit" onClick={() => setEditingKnowledge(!editingKnowledge)} />
                                        }
                                    </div>
                                    <div className="profile__right__section__items">
                                        {(isUsersProfile && editingKnowledge) || (isUsersProfile && (!searchInfo.info.profile.knowledge || searchInfo.info.profile.knowledge === '')) ? (
                                            <form>
                                                <textarea 
                                                    value={editKnowledge}
                                                    onChange={(e) => setEditKnowledge(e.target.value)}
                                                    type="text"
                                                ></textarea>
                                                <button onClick={(e) => {updateKnowledgeJobExtra(e, userInfo.info.id, editKnowledge, editLastJob, editExtraSkills, dispatch, userInfo.accessToken);setEditingKnowledge(false)}}>{languageInfo.text.profile.jobSeeker.save}</button>
                                            </form>
                                        ) : (
                                            <p>{searchInfo.info.profile.knowledge}</p>
                                        )}
                                    </div>
                                </section>
                                <section className="profile__right__section">
                                    <div className="profile__right__section__header">
                                        <p className="profile__right__section__header__title">{userInfo.info.profile.is_active_jobseeker ? languageInfo.text.profile.jobSeeker.previousJob : languageInfo.text.profile.jobSeeker.currentJob}</p>
                                        {isUsersProfile && searchInfo.info.profile.experience && searchInfo.info.profile.experience !== '' &&
                                            <img className='profile__right__section__header__edit' src={editingLastJob ? CloseIcon : pen} alt="edit" onClick={() => setEditingLastJob(!editingLastJob)} />
                                        }
                                    </div>
                                    <div className="profile__right__section__items">
                                        {(isUsersProfile && editingLastJob) || (isUsersProfile && (!searchInfo.info.profile.experience || searchInfo.info.profile.experience === '')) ? (
                                            <form>
                                                <textarea 
                                                    value={editLastJob}
                                                    onChange={(e) => setEditLastJob(e.target.value)}
                                                    type="text"
                                                ></textarea>
                                                <button onClick={(e) => {updateKnowledgeJobExtra(e, userInfo.info.id, editKnowledge, editLastJob, editExtraSkills, dispatch, userInfo.accessToken);setEditingLastJob(false)}}>{languageInfo.text.profile.jobSeeker.save}</button>
                                            </form>
                                        ) : (
                                            <p>{searchInfo.info.profile.experience}</p>
                                        )}
                                    </div>
                                </section>
                                <section className="profile__right__section">
                                    <div className="profile__right__section__header">
                                        <p className="profile__right__section__header__title">{languageInfo.text.profile.jobSeeker.extraSkills}</p>
                                        {isUsersProfile && searchInfo.info.profile.extra && searchInfo.info.profile.extra !== '' &&
                                            <img className='profile__right__section__header__edit' src={editingExtraSkills ? CloseIcon : pen} alt="edit" onClick={() => setEditingExtraSkills(!editingExtraSkills)} />
                                        }
                                    </div>
                                    <div className="profile__right__section__items">
                                        {(isUsersProfile && editingExtraSkills) || (isUsersProfile && (!searchInfo.info.profile.extra || searchInfo.info.profile.extra === '')) ? (
                                            <form>
                                                <textarea 
                                                    value={editExtraSkills}
                                                    onChange={(e) => setEditExtraSkills(e.target.value)}
                                                    type="text"
                                                ></textarea>
                                                <button onClick={(e) => {updateKnowledgeJobExtra(e, userInfo.info.id, editKnowledge, editLastJob, editExtraSkills, dispatch, userInfo.accessToken);setEditingExtraSkills(false)}}>{languageInfo.text.profile.jobSeeker.save}</button>
                                            </form>
                                        ) : (
                                            <p>{searchInfo.info.profile.extra}</p>
                                        )}
                                    </div>
                                </section>
                            </div>
                        ) : (
                            <div className="profile__right">
                                <div className="profile__right__no-details">
                                    <h3>{languageInfo.text.profile.jobSeeker.noEntries}</h3>
                                    <img src={ProfileNotComplete} alt="profile" />
                                </div>
                            </div>
                        )
                    }                   
                </div>
            )
        }
    }else{
        return <LoadingPopup />
    }
}

export default Profile;