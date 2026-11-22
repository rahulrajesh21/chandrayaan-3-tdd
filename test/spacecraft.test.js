import {beforeEach, describe,expect,it, } from "vitest";
import { Spacecraft } from "../src/spacecraft";


describe("Spacecraft",()=>{

    let craft;

    beforeEach(()=>{
        craft = new Spacecraft(0,0,0,"N");
    })

    it("Intializes with the starting coordinates and direction",()=>{
        expect(craft.position).toEqual([0,0,0]);
        expect(craft.direction).toBe("N");
    })

    it.todo("moving forward and backward in the same axis")
})