describe("Selection Sort", function () {


    it("should return '1, 2' when passed in '2,1'", function () {
        let list = [2, 1]


        //demonstrates use of custom matcher
        expect(sort(list)).toEqual([1, 2]);
    });
    it("should return '1, 2, 3, 4, 5, 6' when passed in '3, 6, 2, 1, 4, 5'", function () {
        let list = [3, 6, 2, 1, 4, 5]


        //demonstrates use of custom matcher
        expect(sort(list)).toEqual([1, 2, 3, 4, 5, 6]);
    });
    it("should return '1, 2, 3' when passed in '3, 2, 1'", function () {
        let list = [3, 2, 1]


        //demonstrates use of custom matcher
        expect(sort(list)).toEqual([1, 2, 3]);
    });
    it("should return '1, 2, 3, 5, 6, 9' when passed in '3, 6, 9, 1, 5, 2'", function () {
        let list = [3, 6, 9, 1, 5, 2]


        //demonstrates use of custom matcher
        expect(sort(list)).toEqual([1, 2, 3, 5, 6, 9]);
    });

    it("should return '1, 2, 3, 4, 5, 6, 7, 8, 9,' when passed in '9, 8, 7, 6, 5, 4, 3, 2, 1'", function () {
        let list = [9, 8, 7, 6, 5, 4, 3, 2, 1]


        //demonstrates use of custom matcher
        expect(sort(list)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    it("should return '11, 24, 32, 46, 53, 65, 76, 80, 91,' when passed in '24, 32, 11, 53, 46, 76, 65, 80, 91'", function () {
        let list = [24, 32, 11, 53, 46, 76, 65, 80, 91]


        //demonstrates use of custom matcher
        expect(sort(list)).toEqual([11, 24, 32, 46, 53, 65, 76, 80, 91]);
    });
    /* it("should return '11, 24, 32, 46, 53, 65, 76, 80, 91,' when passed in '24, 32, 11, 53, 46, 76, 65, 80, 91'", function () {
        let array = Array.from({ length: 100 }, () =>
            Math.floor(Math.random() * 100)
        );
        let sortedArray = [...array].sort((a, b) => a - b);
        console.log(array)

        //demonstrates use of custom matcher
        expect(sort(array)).toEqual(sortedArray);
    }); */
});