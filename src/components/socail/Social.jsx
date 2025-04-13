import { useState, useCallback, useEffect } from "react";

import { fetchSocialService } from "../../service/service";
import BaseUrl from "../../service/url";

import "./style.scss";


const mock = process.env.REACT_APP_MOCK_ENV;

const Social = () => {
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
        <aside className="social">
            <ul>
                {
                    social.length ? (
                        social.map(
                            i => (
                                <a key={i.id} href={i.site}>
                                    <li style={{
                                        backgroundImage: `url(${ mock ? i.photo : BaseUrl + i.photo })`
                                    }} />
                                </a>
                            )
                        )
                    ) : ""
                }
            </ul>
        </aside>
    )
}


export default Social;