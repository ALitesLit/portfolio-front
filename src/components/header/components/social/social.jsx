import { useEffect, useState, useCallback } from "react";

import { fetchSocialService } from "../../../../service/service";
import BaseUrl from "../../../../service/url";

import "./style.scss";


const SocialHeader = () => {
    const [social, setSocial] = useState([]);
    
    const fetchSocial = useCallback(
        async () => {
            try {
                const data = await fetchSocialService();

                setSocial(data);
            } catch (error) {
                console.log(error);
            }
        }, []
    );

    useEffect(
        () => {
            fetchSocial();
        }, []
    )


    return (
        <div className="social__header">
            {
                    social.length ? (
                        social.map(
                            i => (
                                <a key={i.id} className="social__header-elem" href={i.site} style={{
                                    backgroundImage: `url(${BaseUrl}${i.photo})`
                                }}>
                                </a>
                            )
                        )
                    ) : ""
                }
        </div>
    )
}


export default SocialHeader;