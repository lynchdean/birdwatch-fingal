"use client";

import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react';
import {Bars3Icon, XMarkIcon, ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import React, {useState} from 'react';
import Link from 'next/link';

const initialNavigation = [
    {name: 'Home', href: '/', external: false, current: false},
    {name: 'Hides & Sites', href: '/hides', external: false, current: false},
    {name: 'Little Terns', href: '/terns', external: false, current: false},
    {name: 'Links & Downloads', href: '/links', external: false, current: false},
    {
        name: 'Events',
        href: 'https://docs.google.com/spreadsheets/d/12SfG8sqV5vCh1qfEGdM02i1AeBb2y26BADTigknyEBg/edit?gid=455322855#gid=455322855',
        external: true,
        current: false
    },
];

function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
    const [navigation, setNavigation] = useState(initialNavigation);

    const handleClick = (name: string, external: boolean) => {
        if (!external) {
            setNavigation(navigation.map(item => ({
                ...item,
                current: item.name === name,
            })));
        }
    };

    return (
        <Disclosure as="nav" className="bg-base-100 py-2">
            <div className="mx-auto max-w-7xl px- sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton
                            className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                            <span className="absolute -inset-0.5"/>
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden"/>
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block"/>
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <figure className="dark:hidden block">
                                <img
                                    src="images/bwif-text-dark.png"
                                    alt="BWI Fingal Logo"
                                    className="h-12 me-4 my-2"
                                />
                            </figure>
                            <figure className="hidden dark:block">
                                <img
                                    src="images/bwif-text.png"
                                    alt="BWI Fingal Logo"
                                    className="h-12 me-4 my-2"
                                />
                            </figure>
                        </div>
                        <div className="hidden sm:ml-6 sm:block my-auto">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <Link key={item.name} href={item.href} target={item.external ? "_blank" : ""}

                                          aria-current={item.current ? 'page' : undefined}
                                          className={classNames(
                                              item.current ? 'bg-base-300 text-base' : 'text-base hover:bg-neutral-500 hover:text-white',
                                              'rounded-md px-3 py-2 text-md font-medium',
                                          )}
                                          onClick={() => handleClick(item.name, item.external)}
                                    >
                                        {item.external ?
                                            <div className="flex">{item.name} <ArrowTopRightOnSquareIcon
                                                className="size-4 my-auto ms-1"/></div> :
                                            <div>{item.name}</div>}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                            onClick={() => handleClick(item.name, item.external)}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}