/**
 * See docs:
 * ...
 */

import { flavour_component, flavour_include, flavour_variable } from "https://codeberg.org/kallasz/baker/raw/branch/main/baker/flavours.ts";

const pf = import.meta.dirname;

export const site_directory = `${pf}/site`;
export const static_directory = `${pf}/static`;
export const component_directory = `${pf}/components`;
export const external_directory = `${pf}/external`;

export const flavouring = [
  flavour_component,
  flavour_include,
  flavour_variable
]