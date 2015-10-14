$(document).ready(function() {

	/*Defining global variables*/
	var submissions = 0;
	var checkMark = '<p class="check"><i class="fa fa-check-square"></i></p>';
	var xMark ='<p class="trash"><i class="fa fa-trash"></i></p>';

// User can click add button or press enter key to add list
		$('#addbutton').on("click", function(event) {
			$('.error').css('display', 'none');

			if ($.trim($('#item-entry').val()) != '') {
				$('.tip').css('display', 'block');
				postItem();
			}
			else {
				$('.error').css('display', 'block');
			}
			
		});

		$('#item-entry').keypress(function(e) {
			if (e.which == 13) {
			e.preventDefault();
			postItem();
			$('#item-entry').focus();
			$('.error').css('display', 'none');
			}
		});

// Takes entered data to use in the created list item
function postItem() {
	var store = $('#store-entry').val();
	var item = $('#item-entry').val();
	var work = '<div class="entry">' + xMark + "<p class='details'>" + store + " : &nbsp&nbsp" + item + "</p>" + checkMark + '</div>';
		$('.list-area').append(work);
		$('#item-entry').val('')
	};

// Allow user to clear the entire list by clicking the clear list button
$(document).on("click", "#clearbutton", function() {
		$('.entry').remove();
		$('.tip').css('display', 'none');
	})


// Change class for entry when user clicks checkMark icon
$(document).on("click", ".check", function(click) {
		$(this).toggleClass('checked').prev('p').effect("highlight").toggleClass('details-done');
	})

// Allow user to delete an item by clicking on trash icon
$(document).on("click", ".trash", function() {
		$(this).parent().remove();
	})

// Allow user to click and drag an item to sort the list
$(function() {

		$('#sortable').sortable({ 
			handle: '.details',
			delay: 200,
			opacity: 0.8,
			cursor: "move",
			revert: 1.0				
		});	
	});
});

