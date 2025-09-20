import React from "react";
import Menu from "@/Components/Layout/Menu";
import classNames from "classnames";

interface HeaderInterface {
    variant?: "landing" | "default"
}

export default function Header({variant = "default"}: HeaderInterface) {
    return (
        <header
            className={classNames("h-[15dvh] max-lg:hidden", variant !== "default" ? "bg-cream-light" : "bg-transparent")}>
            <Menu/>
        </header>
    );
}
