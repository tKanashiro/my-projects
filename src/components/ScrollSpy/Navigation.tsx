const Navigation = () => {
    const onPress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // e.preventDefault();
        const target = window.document.getElementById(
            e.currentTarget.href.split("#")[1]
        );
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div>
            <a onClick={(e) => onPress(e)} href="#first">
                <div data-to-scrollspy-id="first">first</div>
            </a>
            <a onClick={(e) => onPress(e)} href="#second">
                <div data-to-scrollspy-id="second">second</div>
            </a>
            <a onClick={(e) => onPress(e)} href="#third">
                <div data-to-scrollspy-id="third">third</div>
            </a>
            <a onClick={(e) => onPress(e)} href="#fourth">
                <div data-to-scrollspy-id="fourth">fourth</div>
            </a>
        </div>
    );
};

export default Navigation;
