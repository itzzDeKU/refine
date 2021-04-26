import axios from "axios";

import JsonServer from "../../src/index";
import "./index.mock";

axios.defaults.adapter = require("axios/lib/adapters/http");

describe("deleteOne", () => {
    it("correct response", async () => {
        const { data } = await JsonServer(
            "https://refine-nestjs-crud.pankod.com",
            axios,
        ).deleteOne("posts", "99d8ae54-432c-48d4-a385-f0ff4665e448");

        expect(data).toEqual("");
    });
});
