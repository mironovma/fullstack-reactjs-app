import { classNames } from "./classNames";

describe("classNames", () => {
    test("with only one param", () => {
        expect(classNames("someClass")).toBe("someClass");
    });

    test("with additional param", () => {
        const expected = "someClass class1 class2";
        expect(classNames("someClass", {}, ["class1", "class2"])).toBe(
            expected
        );
    });

    test("with mods and additional param", () => {
        const expected = "someClass class1 class2 hovered";
        expect(
            classNames(
                "someClass",
                { hovered: true, active: false, scrollable: undefined },
                ["class1", "class2"]
            )
        ).toBe(expected);
    });
});

/**
 * jest
 */
