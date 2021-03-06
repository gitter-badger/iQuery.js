define(['jquery'],  function ($) {

    var BOM = self,  DOM = self.document;

    $.buildFragment = $.buildFragment  ||  function (iNode) {
        var iFragment = (arguments[1] || DOM).createDocumentFragment();

        for (var i = 0;  iNode[i];  i++)
            iFragment.appendChild( iNode[i] );

        return iFragment;
    };

    $.fn.insertTo = function ($_Target, Index) {
        var DOM_Set = $.buildFragment(this, DOM),  $_This = [ ];

        $($_Target).each(function () {
            var iAfter = $(this.children).eq(Index || 0)[0];

            DOM_Set = arguments[0] ? DOM_Set.cloneNode(true) : DOM_Set;

            $.merge($_This, DOM_Set.children);

            this[iAfter ? 'insertBefore' : 'appendChild'](DOM_Set, iAfter);
        });

        return this.pushStack($_This);
    };

});