import React from "react";
import {AccordionContent} from "@/app/hides/AccordianContent";
import Link from "next/link";
import {ArrowTopRightOnSquareIcon} from "@heroicons/react/24/solid";

export default function Hides() {
    return (
        <div className="grid grid-cols-1 gap-4 mt-4">
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Rogerstown Hide Roster</h2>
                    <p>If you would like to volunteer for hide duty please contact:</p>
                    <a className="link" href="mailto:bwifingal@gmail.com">Paul at bwifingal@gmail.com</a>
                    <div className="card-actions justify-center">
                        <a href="https://docs.google.com/spreadsheets/d/18I5U3M8or1o3oYTaWid3dGJd_8Pd8cNJU685vX0MD0E/edit#gid=0"
                           target="_blank"
                           className="btn btn-neutral w-full my-4">View Roster
                            <ArrowTopRightOnSquareIcon className="size-4"/>
                        </a>
                    </div>
                    <p>The responsibilities of the person on hide duty include:</p>
                    <ul className="list-disc pl-5">
                        <li>
                            Opening hours range between 10.00 am and 4.00 pm. You can leave the hide during that
                            interval but you should try and make yourself available to the public for much of this
                            period. If you do leave during this interval, close a few of the hatches and make sure the
                            hide is accessible.
                        </li>
                        <li>Encourage all visitors to sign Visitors Book</li>
                        <li>Record any rarities or large numbers of species in Log Book</li>
                        <li>Keep an eye out for any unauthorised activities such as shooting/dumping etc.</li>
                        <li>Make sure all hatches/doors are closed and secured when you finish your duty.</li>
                    </ul>
                    <figure>
                        <img src="/images/hides.jpg" alt="Hides site map"/>
                    </figure>
                </div>
            </div>

            <div className="join join-vertical col-span-3 rounded-2xl bg-base-100 shadow-xl w-full">
                {AccordionContent.map((item, index) => (
                    <div key={index} className="collapse collapse-arrow join-item border-base-300 border p-4">
                        <input type="radio" name="my-accordion-4" defaultChecked={index === 0}/>
                        <div className="collapse-title text-xl font-bold">{item.title}
                        </div>
                        <div className="collapse-content">
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>


            <div className="card col-span-3 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Other Sites</h2>
                    <ul className="list-disc ms-5">
                        <li><Link className="link" href="files/Fingal-sites.pdf">Where to watch, North Fingal (Wings
                            2010)</Link></li>
                        <li><Link className="link" href="files/Wings-feb2011-Fingal_hr.pdf">Broadmeadow Estuary (Wings
                            Feb 2015)</Link></li>
                        <li><Link className="link" href="files/Wings-Feb-2015-Broadmeadow.pdf">Fingal Site guide (Wings
                            Feb 2011)</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}