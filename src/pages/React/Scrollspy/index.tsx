import ScrollSpy from "react-ui-scrollspy";
import Title from "components/Title";
import Navigation from "components/ScrollSpy/Navigation";
import { Fragment } from "react/jsx-runtime";
import "./Scrollspy.scss";

const Scrollspy = () => {
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
        <Fragment>
            <Title title="Scrollspy" />
            {/* <Navigation /> */}
            <ScrollSpy scrollThrottle={100} useBoxMethod={false}>
                <div className="nav">
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
                <div style={{ padding: "150px 30px" }} id="first">
                    <h2>First</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aut dolores veritatis doloremque fugit. Soluta aperiam
                        atque inventore deleniti, voluptatibus non fuga eos
                        magni natus vel, rerum excepturi expedita. Tempore,
                        vero!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aut dolores veritatis doloremque fugit. Soluta aperiam
                        atque inventore deleniti, voluptatibus non fuga eos
                        magni natus vel, rerum excepturi expedita. Tempore,
                        vero!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aut dolores veritatis doloremque fugit. Soluta aperiam
                        atque inventore deleniti, voluptatibus non fuga eos
                        magni natus vel, rerum excepturi expedita. Tempore,
                        vero!
                    </p>
                </div>
                <div style={{ padding: "150px 30px" }} id="second">
                    <h2>Second</h2>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aut dolores veritatis doloremque fugit. Soluta aperiam
                        atque inventore deleniti, voluptatibus non fuga eos
                        magni natus vel, rerum excepturi expedita. Tempore,
                        vero!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aut dolores veritatis doloremque fugit. Soluta aperiam
                        atque inventore deleniti, voluptatibus non fuga eos
                        magni natus vel, rerum excepturi expedita. Tempore,
                        vero!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aut dolores veritatis doloremque fugit. Soluta aperiam
                        atque inventore deleniti, voluptatibus non fuga eos
                        magni natus vel, rerum excepturi expedita. Tempore,
                        vero!
                    </p>
                </div>
                <div style={{ padding: "150px 30px" }} id="third">
                    <h2>Third</h2>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aut dolores veritatis doloremque fugit. Soluta aperiam
                        atque inventore deleniti, voluptatibus non fuga eos
                        magni natus vel, rerum excepturi expedita. Tempore,
                        vero!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aut dolores veritatis doloremque fugit. Soluta aperiam
                        atque inventore deleniti, voluptatibus non fuga eos
                        magni natus vel, rerum excepturi expedita. Tempore,
                        vero!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aut dolores veritatis doloremque fugit. Soluta aperiam
                        atque inventore deleniti, voluptatibus non fuga eos
                        magni natus vel, rerum excepturi expedita. Tempore,
                        vero!
                    </p>
                </div>
                <div style={{ padding: "150px 30px" }} id="fourth">
                    <h2>Fourth</h2>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aut dolores veritatis doloremque fugit. Soluta aperiam
                        atque inventore deleniti, voluptatibus non fuga eos
                        magni natus vel, rerum excepturi expedita. Tempore,
                        vero!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aut dolores veritatis doloremque fugit. Soluta aperiam
                        atque inventore deleniti, voluptatibus non fuga eos
                        magni natus vel, rerum excepturi expedita. Tempore,
                        vero!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aut dolores veritatis doloremque fugit. Soluta aperiam
                        atque inventore deleniti, voluptatibus non fuga eos
                        magni natus vel, rerum excepturi expedita. Tempore,
                        vero!
                    </p>
                </div>
            </ScrollSpy>
        </Fragment>
    );
};

export default Scrollspy;
