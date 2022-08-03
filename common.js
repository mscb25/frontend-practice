function Common() {
    let self = this;
    this.promoBar = {
        promoItems: null,
        currentItem: 0,
        numOfItems: 0
    };

    this.initialisePromo = function () {
        let promoItems = $("#promo > div");
        // set vals
        this.promoBar.promoItems = promoItems;
        this.promoBar.numOfItems = promoItems.length;
        this.startDelay();
    }

    this.showNextPromoItem = function () {
        $(self.promoBar.promoItems).fadeOut("slow").promise().done(function () {
            if (self.promoBar.currentItem >= (self.promoBar.numOfItems - 1)) {
                //reset counter
                self.promoBar.currentItem = 0;
            }
            else {
                //increase counter
                self.promoBar.currentItem ++;
            }
            $(self.promoBar.promoItems).eq(self.promoBar.currentItem).fadeIn("slow", function () {
                self.startDelay();
            });
        });
    }

    this.startDelay = function () {
        setTimeout(function () {
            self.showNextPromoItem()
        }, 4000);
    }
}
$(document).ready(function () {
    //initialize
    app.common = new Common();
    app.common.initialisePromo();
});