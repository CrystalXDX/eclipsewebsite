/**handles:thunderhorse-navigation**/
!function(){const n=document.getElementById("site-navigation");if(n){const a=n.getElementsByTagName("button")[0];if(void 0!==a){const i=n.getElementsByTagName("ul")[0];if(void 0!==i){i.classList.contains("nav-menu")||i.classList.add("nav-menu"),a.addEventListener("click",function(){n.classList.toggle("toggled"),"true"===a.getAttribute("aria-expanded")?a.setAttribute("aria-expanded","false"):a.setAttribute("aria-expanded","true")}),document.addEventListener("click",function(e){var t;n.contains(e.target)||(n.classList.remove("toggled"),a.setAttribute("aria-expanded","false"))});var e=i.getElementsByTagName("a"),t=i.querySelectorAll(".menu-item-has-children > a, .page_item_has_children > a");for(const o of e)o.addEventListener("focus",s,!0),o.addEventListener("blur",s,!0);for(const c of t)c.addEventListener("touchstart",s,!1)}else a.style.display="none";function s(){if("focus"===event.type||"blur"===event.type){let e=this;for(;!e.classList.contains("nav-menu");)"li"===e.tagName.toLowerCase()&&e.classList.toggle("focus"),e=e.parentNode}if("touchstart"===event.type){const e=this.parentNode;event.preventDefault();for(const t of e.parentNode.children)e!==t&&t.classList.remove("focus");e.classList.toggle("focus")}}}}}();