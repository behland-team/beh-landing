"use client";
import React from 'react';
import Link, {LinkProps} from "next/link";
import classNames from "classnames";
import {usePathname} from "next/navigation";

interface MenuLinkProps  extends LinkProps{
    className?: string;
    children?: React.ReactNode;
}

function MenuLink({href, className, children, ...props}:MenuLinkProps) {
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