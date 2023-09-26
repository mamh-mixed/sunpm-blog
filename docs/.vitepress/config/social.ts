import {githubLink, zhihuLink} from "./url";
import {DefaultTheme} from "vitepress";

export const socialLinks:  DefaultTheme.SocialLink[] = [
  {icon: 'github', link: githubLink},
  {
    icon: {
      svg: '<svg t="1695715758359" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2254" width="256" height="256"><path d="M512 0a512 512 0 0 1 512 512c0 282.752-229.248 512-512 512S0 794.752 0 512 229.248 0 512 0zM335.36 218.453333s-43.52 2.432-58.837333 29.312c-15.274667 26.88-65.152 164.906667-65.152 164.906667s16.64 7.68 44.8-12.714667c17.92-14.378667 30.933333-33.962667 37.376-56.021333L343.893333 341.333333l2.048 145.664s-88.106667-1.322667-106.026666 0c-17.92 1.28-28.202667 48.512-28.202667 48.512h134.229333a446.848 446.848 0 0 1-46.08 139.306667 399.232 399.232 0 0 1-99.754666 104.746667 113.92 113.92 0 0 0 93.397333-7.68c45.909333-26.88 79.914667-144.853333 79.914667-144.853334l107.946666 132.010667s10.069333-62.72-1.706666-80.469333c-11.776-17.749333-74.666667-89.258667-74.666667-89.258667l-27.648 24.277333 19.626667-78.08 117.589333-0.170666s0.213333-45.952-22.954667-48.554667c-23.168-2.602667-94.677333 0-94.677333 0V343.765333h105.685333s-1.109333-47.445333-21.632-47.445333H308.48z m447.018667 74.325334h-242.773334v429.482666h43.178667l15.872 53.973334 75.946667-53.973334h106.837333l0.938667-429.482666zM732.330667 340.053333v333.312h-50.218667l-64.042667 48.384-13.994666-48.384h-13.098667V340.053333h141.354667z" fill="#999999" p-id="2255"></path></svg>'
    },
    link: zhihuLink,
  }
]

