"use client";

import { useState } from "react";
import { REGISTER_URL } from "@/configurations/constants";
import routes from "@/configurations/routes";
import Button from "@/components/Button";
import Drawer from "@/components/Drawer";
import DrawerLink from "@/components/DrawerLink";
import DrawerSecondaryLink from "./DrawerSecondaryLink";
import Logo from "@/components/Logo";

const MobileNavigator = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  return (
    <>
      <Button onClick={toggleMenu}>Menu</Button>
      <Drawer show={isMenuOpen} onClick={toggleMenu}>
        <div className="tw-flex tw-flex-col tw-h-screen">
          <div className="tw-grow">
            <div className="tw-px-6 tw-pb-4 tw-pt-8" onClick={toggleMenu}>
              <Logo variant="light" />
            </div>
            <div onClick={toggleMenu}>
              {routes
                .filter((route) => !route.disabled)
                .map((route) => (
                  <DrawerLink key={route.path} to={route.path}>
                    {route.name}
                  </DrawerLink>
                ))}
            </div>
          </div>
          <div className="tw-pt-6 tw-pb-10 tw-border-t tw-border-t-gray-200">
            <p className="tw-px-6 tw-font-medium tw-leading-loose tw-font-yk tw-text-gray-400">Previous Conference</p>
            <DrawerSecondaryLink to='https://conf2023.sciwork.dev/'>
              sciwork 2023
            </DrawerSecondaryLink>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default MobileNavigator;
