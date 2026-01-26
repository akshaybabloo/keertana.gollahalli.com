import "./main.css";
import "@fontsource/playfair-display";
import "@fontsource/lato";

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { 
    faBars, 
    faTimes, 
    faEnvelope, 
    faBriefcase, 
    faGraduationCap, 
    faCertificate, 
    faCheckCircle,
    faUserMd,
    faTooth 
} from "@fortawesome/free-solid-svg-icons";

library.add(
    faLinkedin, 
    faBars, 
    faTimes, 
    faEnvelope, 
    faBriefcase, 
    faGraduationCap, 
    faCertificate, 
    faCheckCircle,
    faUserMd,
    faTooth
);

dom.watch();