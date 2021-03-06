describe("VglLight component", function() {
    const {VglLight} = VueGL;
    const assert = chai.assert;
    describe("Creating a light", function() {
        describe("Properties of the light", function() {
            describe("The color of an instance should be same as the color property.", function() {
                it("When the property is a color name.", function() {
                    const vm = new (Vue.extend(VglLight))({propsData: {color: "greenyellow"}});
                    assert.strictEqual(vm.inst.color.r, 173/255);
                    assert.strictEqual(vm.inst.color.g, 255/255);
                    assert.strictEqual(vm.inst.color.b, 47/255);
                });
                it("When the property is a hex code.", function() {
                    const vm = new (Vue.extend(VglLight))({propsData: {color: "#3CB371"}});
                    assert.strictEqual(vm.inst.color.r, 60/255);
                    assert.strictEqual(vm.inst.color.g, 179/255);
                    assert.strictEqual(vm.inst.color.b, 113/255);
                });
                it("When the property is undefined.", function() {
                    const vm = new Vue(VglLight);
                    assert.strictEqual(vm.inst.color.r, 1);
                    assert.strictEqual(vm.inst.color.g, 1);
                    assert.strictEqual(vm.inst.color.b, 1);
                });
            });
            describe("The intensity of an instance should be same as the intensity property.", function() {
                it("When the property is a number.", function() {
                    const vm = new (Vue.extend(VglLight))({propsData: {intensity: 0.8}});
                    assert.strictEqual(vm.inst.intensity, 0.8);
                });
                it("When the property is a string.", function() {
                    const vm = new (Vue.extend(VglLight))({propsData: {intensity: "0.6"}});
                    assert.strictEqual(vm.inst.intensity, 0.6);
                });
                it("When the property is undefined.", function() {
                    const vm = new Vue(VglLight);
                    assert.strictEqual(vm.inst.intensity, 1);
                });
            });
        });
    });
    describe("Watching properties", function() {
        describe("The color of an instance should change when the color property changes.", function() {
            it("From undefined to aliceblue", function(done) {
                const vm = new Vue(VglLight);
                vm.color = "aliceblue";
                vm.$nextTick(() => {
                    try {
                        assert.strictEqual(vm.inst.color.r, 240/255);
                        assert.strictEqual(vm.inst.color.g, 248/255);
                        assert.strictEqual(vm.inst.color.b, 255/255);
                        done();
                    } catch(e) {
                        done(e);
                    }
                });
            });
            it("From burlywood to #8a2be2", function(done) {
                const vm = new (Vue.extend(VglLight))({propsData: {color: "burlywood"}});
                vm.color = "#8a2be2";
                vm.$nextTick(() => {
                    try {
                        assert.strictEqual(vm.inst.color.r, 138/255);
                        assert.strictEqual(vm.inst.color.g, 43/255);
                        assert.strictEqual(vm.inst.color.b, 226/255);
                        done();
                    } catch(e) {
                        done(e);
                    }
                });
            });
        });
        describe("The intensity of instance should change when the intensity property changes.", function() {
            it("From undefined to 0.7", function(done) {
                const vm = new Vue(VglLight);
                vm.intensity = 0.7;
                vm.$nextTick(() => {
                    try {
                        assert.strictEqual(vm.inst.intensity, 0.7);
                        done();
                    } catch(e) {
                        done(e);
                    }
                });
            });
            it("From 0.9 to \"0.4\"", function(done) {
                const vm = new (Vue.extend(VglLight))({propsData: {intensity: 0.9}});
                vm.intensity = "0.4";
                vm.$nextTick(() => {
                    try {
                        assert.strictEqual(vm.inst.intensity, 0.4);
                        done();
                    } catch(e) {
                        done(e);
                    }
                });
            });
        });
    });
});
