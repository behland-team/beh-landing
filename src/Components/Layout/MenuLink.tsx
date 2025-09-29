"use client";
import React, {ComponentProps} from 'react';
import Link from "next/link";
import classNames from "classnames";
import {usePathname} from "next/navigation";

function MenuLink({href, className, children, ...props}: ComponentProps<"link">) {
    const pathname = usePathname();
    return (
        <Link {...props}
              className={classNames("font-medium  lg:text-sm xl:text-base hover:text-cream-medium focus:outline-hidden", className, pathname === href ? "text-cream-medium" : "text-text-black")}
              href={href}>
            {children}
        </Link>
    );
}

export default MenuLink;