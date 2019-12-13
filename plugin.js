(function ($) {
    
    $.fn.Menue = $.fn.Menue || function () {
        var contextmenue = {
            properties: {
                contentOpacity: "100%",
                linkStyling: "false",
                bordering: "none",
                transparency: "0%",
                color: "white",
                backgroundColor: "black",
                outsidePadding: "0px",
                font: "Arial",
                size: "12px",
                padding: "20px",
                SpaceInbetween: "0px",
                positionX: "0",
                positionY: "0",
                tomouse: "true",
                ListStyleType: "none",
                width: "auto",
                entrys: ["Entry 1", "Entry 2", "Entry 3"],
                class: "2c344994-03fa-4238-9223-00e41356c46a",
                entryType: [],
                Overflow: "true"
            },

            Init: function (args) {
                $.extend(contextmenue.properties, args);
                $(document).ready(contextmenue.Events.OnDocumentReady.bind(this));
                return contextmenue;
            },

            Methods: {
                uuidv4: function () {
                    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                        return v.toString(16);
                    });
                },
                openMenue: function () {

                    $(".jsMENUE").hide();

                    if ($(this).data("created") === undefined || $(this).data("created") === "false") {

                        $.extend(contextmenue.properties, { uuid: contextmenue.Methods.uuidv4() })
                        $(this).data("created", "true");


                        // Position contextmenu                
                        if (contextmenue.properties.tomouse === "true") {
                            $.extend(contextmenue.properties, { positionX: event.pageX, positionY: event.pageY });
                        }

                        // Create entries
                        var menü = "";
                        for (var ind = 0; ind < contextmenue.properties.entrys.length; ind++) {
                            menü += "<li>";
                            if (contextmenue.properties.entryType.length === contextmenue.properties.entrys.length) {
                                if (contextmenue.properties.entryType[ind].split(' ')[0] == "a") {
                                    menü += "<" + contextmenue.properties.entryType[ind] + ">" + contextmenue.properties.entrys[ind] + "</" + contextmenue.properties.entryType[ind].split(' ')[0] + ">";
                                }
                                else {
                                    menü += "<" + contextmenue.properties.entryType[ind] + ">" + contextmenue.properties.entrys[ind] + "</" + contextmenue.properties.entryType[ind].split(' ')[0] + ">";
                                }

                            } else {
                                menü += "<p>" + contextmenue.properties.entrys[ind] + "</p>";
                            }
                            menü += "</li>";
                        }

                        // Create contextmenuelement
                        $("body").append("<ul class='jsMENUE' data-uuid='" + contextmenue.properties.uuid + "' style='position: absolute;'>" + menü + "</ul>");

                        // Set basic CSS
                        $(".jsMENUE[data-uuid='" + contextmenue.properties.uuid + "']").css({
                            left: contextmenue.properties.positionX,
                            top: contextmenue.properties.positionY,
                            "background-color": contextmenue.properties.backgroundColor,
                            color: contextmenue.properties.color, "list-style-type": contextmenue.properties.ListStyleType, "font-family": contextmenue.properties.font,
                            fontSize: contextmenue.properties.size,
                        });

                        // width
                        if (contextmenue.properties.width != "auto") {
                            $(".jsMENUE[data-uuid='" + contextmenue.properties.uuid + "']").css({ width: contextmenue.properties.width });
                        }

                        // Margin
                        $(".jsMENUE[data-uuid='" + contextmenue.properties.uuid + "']").find("li").children().css("margin", contextmenue.properties.SpaceInbetween);

                        // Normal Link Design?
                        if (contextmenue.properties.linkStyling === "false") {
                            $(".jsMENUE[data-uuid='" + contextmenue.properties.uuid + "']").find("li").find("a").css({
                                "text-decoration": "none",
                                "color": contextmenue.properties.color,
                            });
                        }

                        // Padding
                        if (contextmenue.properties.ListStyleType === "none") {
                            $(".jsMENUE[data-uuid='" + contextmenue.properties.uuid + "']").css("padding", "0px");
                        } else {
                            $(".jsMENUE[data-uuid='" + contextmenue.properties.uuid + "']").css("padding", contextmenue.properties.padding);
                        }

                        if (contextmenue.properties.outsidePadding != "0px") {
                            var a = contextmenue.properties.ListStyleType === "none" ? 0 : parseInt(contextmenue.properties.padding.replace("px", ""));
                            var b = parseInt(contextmenue.properties.outsidePadding.replace("px", ""));
                            var c = a + b;
                            $(".jsMENUE[data-uuid='" + contextmenue.properties.uuid + "']").css("padding", c + "px");
                        }

                        // Opacity

                        if (typeof (contextmenue.properties.transparency) === "string") {
                            if (contextmenue.properties.transparency.indexOf("%") != -1) {
                                contextmenue.properties.transparency = contextmenue.properties.transparency.replace("%", "");
                            }
                            contextmenue.properties.transparency = parseInt(contextmenue.properties.transparency) * (-1);
                            contextmenue.properties.transparency = contextmenue.properties.transparency < -100 && contextmenue.properties.transparency > 0
                                ? -100 : contextmenue.properties.transparency;
                            contextmenue.properties.transparency += 100;
                            contextmenue.properties.transparency /= 100;
                        }

                        $(".jsMENUE[data-uuid='" + contextmenue.properties.uuid + "']").css("opacity", contextmenue.properties.transparency);

                        if (typeof (contextmenue.properties.contentOpacity) === "string") {
                            contextmenue.properties.contentOpacity = parseInt(contextmenue.properties.contentOpacity.replace("%", "")) / 100;
                        }

                        $(".jsMENUE[data-uuid='" + contextmenue.properties.uuid + "']").find("li").children().css("opacity", contextmenue.properties.contentOpacity);

                        // Border
                        $(".jsMENUE[data-uuid='" + contextmenue.properties.uuid + "']").find("li").css("border", contextmenue.properties.bordering);

                        // Class
                        if (contextmenue.properties.class != "2c344994-03fa-4238-9223-00e41356c46a") {
                            $(".jsMENUE[data-uuid='" + contextmenue.properties.uuid + "']").addClass(contextmenue.properties.class);
                        }
                    } else {

                        if (contextmenue.properties.tomouse === "true") {
                            $.extend(contextmenue.properties, { positionX: event.pageX, positionY: event.pageY });
                            $(".jsMENUE[data-uuid='" + contextmenue.properties.uuid + "']").css({
                                left: contextmenue.properties.positionX,
                                top: contextmenue.properties.positionY,
                            });
                        }

                        $(".jsMENUE[data-uuid='" + contextmenue.properties.uuid + "']").show();

                    }

                    // Allow Overflow of the Contextmenue
                    if (contextmenue.properties.Overflow === "false") {
                        var rightSideItem = $(this).position().left + $(this).outerWidth(true);
                        var rightSideContextMenue = $(".jsMENUE[data-uuid='" + contextmenue.properties.uuid + "']").position().left + $(".jsMENUE[data-uuid='" + contextmenue.properties.uuid + "']").outerWidth(true);
                        var bottomSideItem = $(this).position().top + $(this).outerHeight(true);
                        var bottomSideContextMenue = $(".jsMENUE[data-uuid='" + contextmenue.properties.uuid + "']").position().top + $(".jsMENUE[data-uuid='" + contextmenue.properties.uuid + "']").outerHeight(true);

                        if (rightSideItem < rightSideContextMenue) {
                            $(".jsMENUE[data-uuid='" + contextmenue.properties.uuid + "']").css({ left: rightSideItem - $(".jsMENUE[data-uuid='" + contextmenue.properties.uuid + "']").outerWidth(true)});
                        }

                        if (bottomSideItem < bottomSideContextMenue) {
                            $(".jsMENUE[data-uuid='" + contextmenue.properties.uuid + "']").css({ top: bottomSideItem - $(".jsMENUE[data-uuid='" + contextmenue.properties.uuid + "']").outerHeight(true)});
                        }
                    }

                    event.preventDefault();

                },

                closeMenu: function () {
                    if (event.which != 3) {
                        $(".jsMENUE[data-uuid='" + contextmenue.properties.uuid + "']").hide();
                    }
                }
            },

            Events: {
                OnDocumentReady: function () {
                    $(this).contextmenu(function () {
                        contextmenue.Methods.openMenue.bind(this)();
                    });

                    $(window).click(function () {
                        contextmenue.Methods.closeMenu.bind(this)();
                    });
                }
            }
        };

        return contextmenue.Init.apply(this, arguments);
    };

})(jQuery);