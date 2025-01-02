import React from "react";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <div className="bg-cover bg-center py-16 flex items-center justify-start ">
                <Image src="/images/bwif-logo-t.png"
                       alt="BWI Fingal Logo"
                       width={200} height={200}
                       className="my-auto"
                />
            </div>

            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 auto-rows-max">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Welcome to the Fingal branch of Birdwatch Ireland.</h2>
                        <p className="pb-3">
                            The Fingal Branch is run by a small committee of dedicated volunteers who are passionate
                            about
                            the conservation of wild birds and their habitat in the Fingal area. The Branch formed in
                            1985
                            when Rogerstown estuary came under treat of the development of a large landfill site.

                            <br/><br/>
                            We maintain two hides at Rogerstown estuary. See our <a className="link" href={`/hides`}>Rogerstown
                            Hides</a> page for more details.
                        </p>
                        <div className="card-actions justify-center">
                            <a href="mailto:bwifingal@gmail.com" className="btn btn-neutral">Contact
                                bwifingal@gmail.com</a>
                        </div>
                    </div>
                </div>

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
                            Rockabill Island off the coast from Skerries holds one of Europe's largest breeding colonies
                            of
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
                    <figure>
                        <img
                            src="images/bwi-logo-t.png"
                            alt="BWI Logo"
                            className="h-48 mx-auto my-4"
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
                               className="btn btn-neutral">Become a member</a>
                        </div>
                    </div>
                </div>


                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <figure>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="size-32 my-4">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                            </svg>
                        </figure>
                        <h2 className="card-title">Fundraising and Donations</h2>
                        <p className="pb-3">
                            We rely on the support of the public to finance our activities, such as the maintenance of
                            the hides at Rogerstown and running the Little Tern and Lapwing projects. Our main
                            fundraiser is the annual General Knowledge Pub Quiz in January every year so your support is
                            much welcomed.

                            <br/><br/>

                            Every donation, however large or small, is important to us and helps us to protect Fingal's
                            birds and biodiversity and in particular our work with Little Terns at Portrane and our
                            hides at Rogerstown. Thank you for your support.
                        </p>
                        <div className="card-actions justify-center">
                            <a href="https://buy.stripe.com/eVa5nm22EbA78FyfYY" target="_blank"
                               className="btn btn-neutral">Donate</a>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <figure>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="size-32 my-4">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"/>
                            </svg>

                        </figure>
                        <h2 className="card-title">Events</h2>
                        <p className="">
                            We host a series of indoor and outdoor events throughout the year. See our Events page for
                            more details. These events are open to the public and free of charge with an option to make
                            a small donation at the end. We regularly support joint events with organisations such
                            Fingal County Council, local schools, tidy town groups and other societies, giving talks or
                            walks.
                        </p>
                        <div className="card-actions justify-center">
                            <a href={`/events`} target="_blank"
                               className="btn btn-neutral">Events</a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}