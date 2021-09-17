import React from "react";
import './ScrollJobs.scss';
import OptionsIcon from '../../../assets/svg/options-icon-no-background.svg';
import Bookmark1 from '../../../assets/svg/bookmark1.svg';

function ScrollJobs({jobs}) {
    return (
        <>
            {jobs && jobs.map((jobOffer, i) => {
                let companyInfo = {
                    logo: "https://tse4.mm.bing.net/th?id=OIP.v-Kd-ya8T4msyd4Gk2VpzgHaHa&pid=Api",
                    name: "datorium"
                }
        
                return (
                    <div className="job-panel panel" key={i}>
                        <div className="job-panel__top">
                            <img src={companyInfo.logo} alt="logo" className="logo" />
                            <div className="info">
                                <h4>{companyInfo.name}</h4>
                                <small>{jobOffer.post_time}</small>
                            </div>
                            <img src={OptionsIcon} alt="options" className="options" />
                        </div>
                        <div className="job-panel__location">
                            <p>{jobOffer.position_city}, {jobOffer.position_country}</p>
                        </div>
                        <div className="job-panel__requirements">
                            <p>{jobOffer.position_requirements}</p>
                        </div>
                        <p>{jobOffer.position_info}</p>
                        <div className="job-panel__bottom">
                            <img src={Bookmark1} alt="bookmark" />
                            <div className="job-panel__bottom__price-wrapper">
                                <small>SĀKOT NO</small>
                                <h2>€ {jobOffer.price_range}/mēnesī</h2>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default ScrollJobs;