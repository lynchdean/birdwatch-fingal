import React from "react";
import {TernContent} from "@/app/terns/content";
import {ArrowTopRightOnSquareIcon} from "@heroicons/react/24/solid";

const pdfYears = [2024, 2023, 2022, 2021, 2020, 2018];

export default function Birds() {
    return (
        <div className="grid grid-cols-1 gap-4 mt-4">
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Little Terns</h2>
                    <a href="files/Little-Tern-2024-Portrane.pdf"
                       target="_blank"
                       className="btn btn-neutral w-full">
                        2024 Colony News
                        <ArrowTopRightOnSquareIcon className="size-4"/>
                    </a>
                    <a href="https://docs.google.com/spreadsheets/d/1A2BNZEkcOCirsFyDVrNU3NI3UqSrj5p8zziyeGpy3qg"
                       target="_blank"
                       className="btn btn-neutral w-full">
                        View Little Tern Warden Roster
                        <ArrowTopRightOnSquareIcon className="size-4"/>
                    </a>
                </div>
            </div>


            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    {TernContent.section1.map((section, index) => (
                        <div key={index}>
                            <h3 className="card-title">{section.title}</h3>
                            <p className="pb-2">{section.content}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Little Tern Reports (PDF)</h2>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                        {pdfYears.map((year) => (
                            <a key={year} href={`files/littletern${year}.pdf`} className="btn btn-neutral"
                               target="_blank">
                                {year}
                                <ArrowTopRightOnSquareIcon className="size-4"/>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    {TernContent.section2.map((section, index) => (
                        <p className="pb-2" key={index}>{section}</p>
                    ))}
                </div>
            </div>

            {/*<div className="card bg-base-100 shadow-xl">*/}
            {/*    <div className="card-body">*/}
            {/*        <div className="carousel">*/}
            {/*            {[...Array(6)].map((_, index) => (*/}
            {/*                <div id={`item${index + 1}`} className="carousel-item h-full w-full">*/}
            {/*                    <img src={`images/tern${index + 1}.jpg`} className="h-full w-full"/>*/}
            {/*                </div>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*        <div className="flex w-full justify-center gap-2 py-2">*/}
            {/*            {[...Array(6)].map((_, index) => (*/}
            {/*                <a href={`#item${index + 1}`} className="btn btn-xs">{index + 1}</a>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}
