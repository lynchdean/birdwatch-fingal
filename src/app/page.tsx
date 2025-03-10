import React from "react";
import Image from "next/image";
import {CalendarDaysIcon, HeartIcon, ArrowTopRightOnSquareIcon} from '@heroicons/react/24/solid'

export default function Home() {
    return (
        <div>
            <div className="bg-cover bg-center py-16 flex items-center justify-start ">
                <Image src="/images/bwif-logo-border.png"
                       alt="BWI Fingal Logo"
                       width={200} height={200}
                       className="my-auto"
                />
            </div>


            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 auto-rows-max">

                <div className="card lg:col-span-1 md:col-span-2 bg-base-100 shadow-xl">
                    {/* Welcome */}
                    <div className="card-body">
                        <h2 className="card-title">Welcome to the Fingal branch of Birdwatch Ireland</h2>
                        <p className="pb-3">
                            The Fingal Branch is run by a small committee of dedicated volunteers who are passionate
                            about
                            the conservation of wild birds and their habitat in the Fingal area. The Branch formed in
                            1985
                            when Rogerstown estuary came under threat of the development of a large landfill site.

                            <br/><br/>
                            We maintain two hides at Rogerstown estuary. See our <a className="link" href={`/hides`}>
                            Hides & Sites</a> page for more details.
                        </p>
                        <div className="card-actions justify-center">
                            <a href="mailto:bwifingal@gmail.com" className="btn btn-neutral w-full">Contact
                                bwifingal@gmail.com</a>
                        </div>
                    </div>
                </div>

                {/* About Fingal */}
                <div className="card md:card-side md:col-span-2 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">About Fingal</h2>
                        <p>
                            Fingal is situated in North Co. Dublin and can boast of great birding spots for the beginner
                            and
                            experienced birder alike. Fingal extends from the outer limits of Dublin city to Meath in
                            the
                            North and to the West.
                            <br/>
                            <br/>
                            Due to its location on the east coast there is a good variety of coastal habitat to be found
                            including beaches, cliffs, islands and estuaries as well as agricultural land, woodland
                            etc..
                            Rockabill Island off the coast from Skerries holds one of Europe&apos;s largest breeding
                            colonies of
                            Roseate Terns while during the winter months Rogerstown Estuary holds internationally
                            important
                            numbers of Pale-bellied Brent Geese, along with a further 10 species of wintering waterfowl
                            in
                            nationally important numbers, including Wigeon and Black-tailed Godwit.
                        </p>
                    </div>
                    <figure>
                        <img
                            src="images/fingal-location.png"
                            alt="Fingal map location"
                        />
                    </figure>
                </div>


                <div className="card bg-base-100 shadow-xl">
                    <figure className="bg-white">
                        <img
                            src="images/iwebs.jpg"
                            alt="I-Webs Logo"
                            className="my-4 max-h-32"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">I-Webs</h2>
                        <p>
                            Ireland Wetland Bird Survey (I-Webs) counts of Rogerstown Estuary The birds of Fingal&apos;s
                            estuaries
                            and coast line are counted once a month between September and March as part of I-WeBS. The
                            counts
                            have to be coordinated to provide accurate numbers as birds frequently move from one area to
                            another. For Rogerstown a team of counters meet up and are given a section of the estuary to
                            count.
                            The numbers and then correlated and passed onto the I-WeBS office. The results are published
                            annually and are used to track population trends over time.
                        </p>
                        <p>
                            If you would like to get involved or if you have any queries, please contact Helen at the
                            I-WeBS Office, email bwifingal@gmail.com or simply turn up on the day. New volunteers are
                            always needed and will be trained by our experienced counters.
                        </p>
                        <p className="font-bold">Meet at Turvey Nature Park car park on Turvey Avenue</p>
                        <div className="card-actions justify-center">
                            <a href="https://docs.google.com/spreadsheets/d/1Y9me-h63ZsqC6ITFmZcI23To04Zgfo98b1q4Sz4wihI/edit#gid=0"
                               target="_blank"
                               className="btn btn-neutral w-full">View Schedule
                                <ArrowTopRightOnSquareIcon className="size-4"/>
                            </a>
                        </div>
                    </div>
                </div>


                {/* BWI Membership */}
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="images/bwi-logo.jpg"
                            alt="BWI Logo"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">BWI Membership</h2>
                        <p className="pb-3">
                            As a voluntary organisation, the financial support we receive from our members is vital
                            if we are to be able to continue our bird and habitat conservation work, keep working with
                            schools and teachers and create and manage nature reserves. By becoming a member today,
                            you can help us in our work and make a real difference to wildlife in Ireland For more
                            details and an application form click the link below.
                        </p>
                        <div className="card-actions justify-center">
                            <a href="https://birdwatchireland.ie/get-involved/join-us-become-a-member/" target="_blank"
                               className="btn btn-neutral w-full">Become a member
                                <ArrowTopRightOnSquareIcon className="size-4"/>
                            </a>
                        </div>
                    </div>
                </div>

                {/* ORE Link */}
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img src="images/ORE.jpg"
                             alt="ORE Logo"
                        />
                    </figure>
                    <div className="card-body">
                        <p></p>
                        <div className="card-actions justify-center">
                            <a href="https://birdwatchireland.ie/our-work/advocacy-policy/climate-change/renewable-energy/offshore-renewables/"
                               target="_blank"
                               className="btn btn-neutral w-full">Read More
                                <ArrowTopRightOnSquareIcon className="size-4"/>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Fundraising and Donations */}
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <HeartIcon className="size-32 my-4"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Fundraising and Donations</h2>
                        <p className="pb-3">
                            We rely on the support of the public to finance our activities, such as the maintenance of
                            the hides at Rogerstown and running the Little Tern and Lapwing projects.
                            <br/><br/>
                            Every donation, however large or small, is important to us and helps us to protect
                            Fingal&apos;s
                            birds and biodiversity and in particular our work with Little Terns at Portrane and our
                            hides at Rogerstown. Thank you for your support.
                        </p>
                        <div className="card-actions justify-center">
                            <a href="https://buy.stripe.com/eVa5nm22EbA78FyfYY" target="_blank"
                               className="btn btn-neutral w-full">Donate
                                <ArrowTopRightOnSquareIcon className="size-4"/>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Events */}
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <CalendarDaysIcon className="size-32 my-4"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Events</h2>
                        <p className="">
                            We host a series of indoor and outdoor events throughout the year. Click the button below
                            for more details. These events are open to the public and free of charge with an option to
                            make a small donation at the end. We regularly support joint events with organisations such
                            Fingal County Council, local schools, tidy town groups and other societies, giving talks or
                            walks.
                        </p>
                        <div className="card-actions justify-center">
                            <a href="https://docs.google.com/spreadsheets/d/12SfG8sqV5vCh1qfEGdM02i1AeBb2y26BADTigknyEBg/edit?gid=455322855#gid=455322855"
                               target="_blank"
                               className="btn btn-neutral w-full">Events
                                <ArrowTopRightOnSquareIcon className="size-4"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
