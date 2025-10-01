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
        <Link {...props} data-state={isActive ? "active" : ""}
              className={classNames(className, isActive ? "text-cream-medium" : "text-text-black")}
              href={href}>
            {children}
        </Link>
    );
}

export default MenuLink;