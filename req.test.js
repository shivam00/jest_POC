import req from "./req";


it("test", async () => {
    const response = await req();
   
    expect(response.status).toBe(200);
   
})


it("test", async () => {
    const response = await req();
   
    expect(response.data.login).toBe('shivam00');
})