(function($) {
    // TODO: make the node ID configurable
    var treeNode = $('#jsdoc-toc-nav');

    // initialize the tree
    treeNode.tree({
        autoEscape: false,
        closedIcon: '&#x21e2;',
        data: [{"label":"<a href=\"global.html\">Globals</a>","id":"global","children":[]},{"label":"<a href=\"FIFO.html\">FIFO</a>","id":"FIFO","children":[]},{"label":"<a href=\"Games.html\">Games</a>","id":"Games","children":[]},{"label":"<a href=\"LIFO.html\">LIFO</a>","id":"LIFO","children":[]},{"label":"<a href=\"Maths.html\">Maths</a>","id":"Maths","children":[]},{"label":"<a href=\"Objects.html\">Objects</a>","id":"Objects","children":[{"label":"<a href=\"Objects.Circle.html\">Circle</a>","id":"Objects.Circle","children":[]},{"label":"<a href=\"Objects.ObjectBase.html\">ObjectBase</a>","id":"Objects.ObjectBase","children":[]},{"label":"<a href=\"Objects.Rectangle.html\">Rectangle</a>","id":"Objects.Rectangle","children":[]}]}],
        openedIcon: ' &#x21e3;',
        saveState: false,
        useContextMenu: false
    });

    // add event handlers
    // TODO
})(jQuery);
