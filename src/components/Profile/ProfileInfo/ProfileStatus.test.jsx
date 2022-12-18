import React from "react";
import { create } from "react-test-renderer"
import ProfileStatus from "./ProfileStatus";
describe("Profile status component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("it-kamasutra.com");
    });
});
test("after creation span with status should be displayed", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" />);
        const root = component.root;
    // eslint-disable-next-line testing-library/await-async-query
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });
test("after creation input shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" />);
        const root = component.root;
    // eslint-disable-next-line testing-library/await-async-query
        expect(()=>{
            let input = root.findByType("input");
        }).toThrow();
    });
test("ll", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" />);
        const root = component.root;
    // eslint-disable-next-line testing-library/await-async-query
        let span = root.findByType("span");
        expect(span.children[0]).toBe("it-kamasutra.com");
    });
test("input should be displayed in editMode", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" />);
        const root = component.root;
    // eslint-disable-next-line testing-library/await-async-query
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("it-kamasutra.com");
    });
