"use client";
import { useState, useCallback, useEffect } from "react";

import { fetchSocialService } from "../../service/service";
import { ISocailResponse } from "@/interfaces/Enitys";
import BaseUrl from "../../service/url";
import { BackendMode } from "@/interfaces/Enums";

import "./style.scss";


const backendMode: BackendMode = process.env.NEXT_PUBLIC_BACKEND_MODE;

const Social = () => {
    const [social, setSocial] = useState<ISocailResponse[]>([]);

    
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
    );


    useEffect(
        () => {
            
            console.log(social)
        }, [social]
    )


    return (
        <aside className="social">
            <ul>
                {
                    social.length ? (
                        social.map(
                            (i: ISocailResponse, index: number) => (
                                <a key={ index } href={ i.site }>
                                    <li style={{
                                        backgroundImage: `url(${ backendMode !== "backend" ? `${i.photo}` : BaseUrl + i.photo })`
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