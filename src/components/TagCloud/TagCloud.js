import React, { useEffect, useState } from "react";
import TagCloud from "TagCloud";
import './tagcloud.css';

const TextShpere = () => {

    useEffect (() => {

        return () => {
            const container = ".tagcloud"
            const texts = [
                "HTML", "CSS", "SASS", "JavaScript", "ReactJS", "NodeJs", "Git", "Github", "MongoDb", "Postman"
            ];
            const options = {
                radius: 300,
                maxSpeed: "normal",
                initSpeed: "normal",
                keep: true,
            };
            TagCloud (container, texts, options);
        };
    },[]);

    return (
        <>
        <div className="text-shpere">
            <span className="tagcloud"></span>
        </div>
        </>
    );
}

export default TextShpere