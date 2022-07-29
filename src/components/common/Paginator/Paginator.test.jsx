import React from "react";
import {create} from "react-test-renderer";
import Paginator from "./Paginator";

describe("Paginator component",() => {
    test("if pages count = 11, only 10 will be shown", () => {
        const component = create(<Paginator totalItemsCount={11}
                                            pageSize={1}
                                            portionSize={10} />);
        const span = component.root.findAllByType("span");
        expect(span.length).toBe(10);
    });
    test("if pages = 11 the button Next will be shown", () => {
        const component = create(<Paginator totalItemsCount={11}
                                            pageSize={1}
                                            portionSize={10} />);
        const span = component.root.findByType("button");
        expect(span.children.length).toBe(1);
    });
});