
//const topRef = useRef(null);

let topRef;

function ScrollToTopFunction() {
    topRef.current.scrollIntoView({behavior: 'smooth'})
};

