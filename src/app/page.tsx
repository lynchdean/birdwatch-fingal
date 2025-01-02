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

            <div className="card md:card-side bg-base-100 shadow-xl mb-6">
                <div className="card-body">
                    <h2 className="card-title">Welcome to the Fingal branch of Birdwatch Ireland.</h2>
                    <p>
                        Fingal is situated in North Co. Dublin and can boast of great birding spots for the beginner and
                        experienced birder alike. Fingal extends from the outer limits of Dublin city to Meath in the
                        North and to the West.
                        <br/>
                        <br/>
                        Due to its location on the east coast there is a good variety of coastal habitat to be found
                        including beaches, cliffs, islands and estuaries as well as agricultural land, woodland etc..
                        Rockabill Island off the coast from Skerries holds one of Europe's largest breeding colonies of
                        Roseate Terns while during the winter months Rogerstown Estuary holds internationally important
                        numbers of Pale-bellied Brent Geese, along with a further 10 species of wintering waterfowl in
                        nationally important numbers, including Wigeon and Black-tailed Godwit.
                    </p>
                    <div className="card-actions justify-center">
                        <a href="mailto:bwifingal@gmail.com" className="btn btn-neutral">Contact
                            bwifingal@gmail.com</a>
                    </div>
                </div>
                <figure>
                    <img
                        src="images/fingal-location.png"
                        alt="Fingal map location"
                    />
                </figure>
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6">
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
                                 stroke="currentColor" className="size-48 my-4">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                            </svg>
                        </figure>
                        <h2 className="card-title">Donate</h2>
                        <p className="pb-3">
                            Every donation, however large or small, is important to us and helps us to protect Fingal's
                            birds and biodiversity and in particular our work with Little Terns at Portrane and our
                            hides at Rogerstown. You can adjust the donation to any amount you want. Thank you for your
                            support.
                        </p>
                        <div className="card-actions justify-center">
                            <a href="https://buy.stripe.com/eVa5nm22EbA78FyfYY" target="_blank"
                               className="btn btn-neutral">Donate</a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}