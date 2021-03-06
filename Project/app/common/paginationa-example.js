System.register(['angular2/core', 'angular2/common', './pagination.component', './pager.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, pagination_component_1, pager_component_1;
    var Angular2Pagination;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (pagination_component_1_1) {
                pagination_component_1 = pagination_component_1_1;
            },
            function (pager_component_1_1) {
                pager_component_1 = pager_component_1_1;
            }],
        execute: function() {
            /*Angular 2 Pagination Example*/
            Angular2Pagination = (function () {
                function Angular2Pagination() {
                    //this array contains the image we will show for each page
                    this.slides = [];
                    //print to the user the selected page
                    this.currentSelectedPage = "";
                    //print to the user the total iterms per page
                    this.currentItemsPerPage = "";
                    //the maximum buttons to show
                    this.maxSize = 3;
                    //the number of pages you want to print
                    this.totalResults = 60;
                    //the current page
                    this.currentPage = 2;
                    this.slides.push({ image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car1.jpg', text: 'BMW 1' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car2.jpg', text: 'BMW 2' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car3.jpg', text: 'BMW 3' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car4.jpg', text: 'BMW 4' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg', text: 'BMW 5' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car6.jpg', text: 'BMW 6' });
                }
                Angular2Pagination.prototype.setCurrentPage = function (pageNo) {
                    this.currentPage = pageNo;
                };
                ;
                Angular2Pagination.prototype.currentPageChanged = function (event) {
                    this.currentSelectedPage = ' is : ' + event.page;
                    this.currentItemsPerPage = ' is : ' + event.itemsPerPage;
                };
                ;
                Angular2Pagination = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n                <div class=\"row\">\n\n                    <h4>Angular 2 Pagination Example</h4> <br>\n                    <span class=\"text-danger\"> The selected page<span class=\"badge\">{{currentSelectedPage}}</span> </span> <br>\n                    <span class=\"text-danger\"> Totoal items per page<span class=\"badge\">{{currentItemsPerPage}}</span> </span> <br>\n\n                    <div class=\"form-group\">\n                    <img [src]=\"slides[currentPage-1].image\" style=\"margin:auto;\">\n                    </div>\n                    <div class=\"form-group\">\n                    <pagination [boundaryLinks]=\"true\" [totalItems]=\"totalResults\"\n                                [(ngModel)]=\"currentPage\" (pageChanged)=\"currentPageChanged($event)\"\n                                [maxSize]=\"maxSize\"\n                                ></pagination>\n                                <br>\n                    <button type=\"button\" class=\"btn btn-info\" (click)=\"setCurrentPage(2)\">Set the current page <span class=\"badge\">to: 2</span></button> <br>\n\n                    <br>\n                    </div>\n                    <div class=\"form-group\" style=\"float: left\">\n                    <h4>Angular 2 Pager Example</h4>\n                    <pager [totalItems]=\"totalResults\" [(ngModel)]=\"currentPage\" onPageChanged=\"currentPageChanged($event)\"></pager>\n                    </div>\n\n                </div>\n\n             ",
                        directives: [pagination_component_1.Pagination, pager_component_1.Pager, common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [])
                ], Angular2Pagination);
                return Angular2Pagination;
            }());
            exports_1("Angular2Pagination", Angular2Pagination);
        }
    }
});
//# sourceMappingURL=paginationa-example.js.map