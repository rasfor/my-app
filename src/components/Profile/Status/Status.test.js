import React from "react";
import {create} from "react-test-renderer";
import Status from "./Status";

describe("Status component",() => {
    test("Status from props should be in state", () => {
        const component = create(<Status status={"my superStatus"} />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("my superStatus")
    });
    test("After creation span should be displayed", () => {
        const component = create(<Status status={"my superStatus"} />);
        const root = component.root;
        const span = root.findByType("span");
        expect(span.children.length).not.toBeNull()
    });
    test("After creation span value should be my superStatus", () => {
        const component = create(<Status status={"my superStatus"} />);
        const root = component.root;
        const span = root.findByType("span");
        expect(span.children[0]).toBe("my superStatus")
    });
    test("After creation input shouldn't displayed", () => {
        const component = create(<Status status={"my superStatus"} />);
        const root = component.root;
        expect(() => {
            const input = root.findByType("input");
        }).toThrow();
    });
    test("After click on span input should be displayed", () => {
        const component = create(<Status status={"my superStatus"} />);
        const root = component.root;
        const span = root.findByType("span");
        span.props.onDoubleClick();
        const input = root.findByType("input");
        expect(input.value).toBe("my superStatus")
    });
    test("After click on span it should not be displayed", () => {
        const component = create(<Status status={"my superStatus"} />);
        const root = component.root;
        const span = root.findByType("span");
        span.props.onDoubleClick();
        expect(()=>{
            const span = root.findByType("span");
        }).toThrow();
    });
    test("After blur from input callback should be called", () => {
        const mockCallBack = jest.fn();
        const component = create(<Status status={"my superStatus"} updateUserStatus={mockCallBack}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallBack.mock.calls.length).toBe(1);
    });
});