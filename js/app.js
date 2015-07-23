$(document).ready(function() {

	/*Defining global variables*/
	console.log('Welcome to console');
	var submissions = 0;
	var checkMark = '<p class="check"><i class="fa fa-check-square"></i></p>';
	var xMark ='<p class="trash"><i class="fa fa-trash"></i></p>';

		$('#addbutton').on("click", function(event) {
			postItem();
		});

		$('#item-entry, #note-entry').keypress(function(e) {
			if (e.which == 13) {
			postItem();
			$('#item-entry').focus();
			}
		});

// Takes returned value from the previous function and manipulate it*/
function postItem() {
	var store = $('#store-entry').val();
	var item = $('#item-entry').val();
	var note = $('#note-entry').val();
	var work = '<div class="entry">' + xMark + "<p class='details'>" + store + " :&nbsp&nbsp&nbsp" + item + " - " + note + "</p>" + checkMark + '</div>';
		$('.list-area').append(work);
		$('#item-entry').val('')
		$('#note-entry').val('')
	};

// Change class for entry when user clicks checkMark icon
$(document).on("click", ".check", function(click) {
		$(this).prev('p').effect("highlight").toggleClass('details-done');
	})

//Allow user to delete an item by clicking on trash icon
$(document).on("click", ".trash", function() {
		$(this).parent().effect("clip");
	})

//Allow user to click and drag an item to sort the list
$(function() {

		$('#sortable').sortable({ 
			placeholder: "ui-sortable-placeholder",
			cursor: "move",
		});
		
	});	
});
