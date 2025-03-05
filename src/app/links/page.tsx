import React from "react";
import {ArrowTopRightOnSquareIcon} from "@heroicons/react/24/solid";


const links = [
    {name: "Birdwatch Ireland", url: "https://birdwatchireland.ie/"},
    {name: "Other Branches", url: "https://birdwatchireland.ie/our-work/local-branches/"},
    {name: "National Parks and Wildlife Service", url: "https://www.npws.ie/"},
    {name: "Duchas", url: "https://www.duchas.ie/en"},
    {name: "Irish Wildlife Trust", url: "https://iwt.ie/"},
    {name: "Irish Raptor Study Group", url: "http://irsg.ie/irsg.html#!/"},
    {name: "The Golden Eagle Trust", url: "http://www.goldeneagle.ie/"},
    {name: "Irish Rare Birds Committee", url: "http://www.irbc.ie/"},
    {name: "RSPB", url: "https://www.rspb.org.uk/"},
    {name: "Northern Ireland", url: "http://nibirds.blogspot.com/"},
    {name: "Scotland", url: "https://www.the-soc.org.uk/"},
    {name: "Wales", url: "https://birdsin.wales/"}
]

const downloads = [
    {name: "Ballast Pit wild bird and biodiversity survey June 2022", path: ""},
    {name: "Mill Stream wild bird and biodiversity survey", path: ""},
    {name: "Kenure Woods Bird Survey 2021", path: ""},
    {name: "Red Island-South Strand wild bird and biodiversity survey", path: ""},
    {name: "Rivervalley Park Survey May 2020", path: ""},
    {name: "St Catherine Bird Survey 2021.pdf", path: ""},
]

export default function Downloads() {
    return (
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 mt-4">
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Links <ArrowTopRightOnSquareIcon className="size-4"/></h2>

                    {links.map((link, index) => (
                        <a key={index} href={link.url} target="_blank" className="btn w-full">{link.name}</a>
                    ))}
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Downloads</h2>
                    {downloads.map((download, index) => (
                        <a key={index} href={`/files/${download.path}`} className="btn w-full">{download.name}</a>
                    ))}
                </div>
            </div>
        </div>
    )
}