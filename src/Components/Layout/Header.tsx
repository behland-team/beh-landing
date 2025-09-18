import React from "react";
import {useTranslations} from "next-intl";
import Menu from "@/Components/Layout/Menu";
import classNames from "classnames";

interface HeaderInterface {
    variant?: "landing" | "default"
}

export default function Header({variant = "default"}: HeaderInterface) {
    return (
        <header
            className={classNames("h-[15dvh]", variant !== "default" ? "bg-cream-light" : "bg-transparent")}>
            <Menu/>
        </header>
    );
}
