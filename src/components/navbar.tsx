import React from "react";

export function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <figure className="dark:hidden block">
                    <img
                        src="images/bwif-text-dark.png"
                        alt="BWI Fingal Logo"
                        className="h-12 mx-4 my-2"
                    />
                </figure>
                <figure className="hidden dark:block">
                    <img
                        src="images/bwif-text.png"
                        alt="BWI Fingal Logo"
                        className="h-12 mx-4 my-2"
                    />
                </figure>
            </div>
            <div className="flex flex-1 justify-end px-2">
                <div className="flex items-stretch">
                    <a className="btn btn-ghost rounded-btn" href={`/`}>Home</a>
                    <a className="btn btn-ghost rounded-btn" href={`/hides`}>Rogerstown Hides</a>
                    <a className="btn btn-ghost rounded-btn" href={`/iwebs`}>I-Webs</a>
                    <a className="btn btn-ghost rounded-btn" href={`/birds`}>Birds</a>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost">More</div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content rounded-b-lg bg-base-100 z-[1] mt-4 w-52 p-2 shadow">
                            <li><a className="btn btn-ghost rounded-btn" href={`/sites`}>Sites</a></li>
                            <li><a className="btn btn-ghost rounded-btn" href={`/links`}>Links</a></li>
                            <li><a className="btn btn-ghost rounded-btn" href={`/downloads`}>Downloads</a></li>
                            <li><a className="btn btn-ghost rounded-btn" href={`/events`}>Events
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
                                </svg>
                            </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}