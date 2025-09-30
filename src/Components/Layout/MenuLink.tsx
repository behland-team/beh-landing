"use client";
import React from 'react';
import Link, {LinkProps} from "next/link";
import classNames from "classnames";
import {usePathname} from "next/navigation";

interface MenuLinkProps extends LinkProps {
    className?: string;
    children?: React.ReactNode;
    exact?: boolean;
}

function MenuLink({
                      href,
                      className,
                      children,
                      exact = true,
                      ...props
                  }: MenuLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & React.RefAttributes<HTMLAnchorElement>) {
    const pathname = usePathname();
    const isActive = !exact ? pathname.startsWith(href) : pathname === href;
    return (
        <Link {...props}
              className={classNames("font-medium  lg:text-sm xl:text-base hover:text-cream-medium focus:outline-hidden", className, isActive ? "text-cream-medium" : "text-text-black")}
              href={href}>
            {children}
        </Link>
    );
}

export default MenuLink;