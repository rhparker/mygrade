function setGrades() {
	// // Define those variables!
	// var std1 = parseFloat(document.getElementById('std1').value);	
	// var std2 = parseFloat(document.getElementById('std2').value);	
	// var std3 = parseFloat(document.getElementById('std3').value);	

	std_pts = [0,0,0,0,0]
	num_stds = 0
	std_grade = 65
	$('.std').each(function(index,data) {
   		var value = $(this).val();
   		if (value != '') {
 	  	    pts = Number(value);
 	  	    if (pts > 0 && pts <= 4) {
 	  	    	std_pts[pts] += 1;
 	  	    	std_pts[0] += pts;
 	  	    	num_stds += 1;
 	  	    }
 	    }
	});

	$('#std1').html(std_pts[1]);
	$('#std2').html(std_pts[2]);
	$('#std3').html(std_pts[3]);
	$('#std4').html(std_pts[4]);	

	threehigher = std_pts[3] + std_pts[4];
	twohigher = std_pts[2] + std_pts[3] + std_pts[4];

	// compute standards grades
	if (num_stds == 0) {
		$('#stdgrade').html('');
	}
	else if (std_pts[4]/num_stds >= 0.8 && std_pts[2] == 0 && std_pts[1] == 0) {
		$('#stdgrade').html('A');
		std_grade = 96;
	}
	else if (threehigher/num_stds >= 0.8 && std_pts[1] == 0) {
		$('#stdgrade').html('B');
		std_grade = 86;
	}
	else if (twohigher/num_stds >= 0.8 ) {
		$('#stdgrade').html('C');
		std_grade = 76;
	}
	else {
		$('#stdgrade').html('D');
		std_grade = 66;
	}

	excellent    = Number( $('#excellent').val() )
	satisfactory = Number( $('#satisfactory').val() )
	fair         = Number( $('#fair').val() )
	nocredit     = Number( $('#nocredit').val() )
	totalhw = excellent+satisfactory+fair+nocredit
	if (totalhw != '') {
		hwaverage = 100*(1*excellent + 0.92*satisfactory + 0.80*fair)/totalhw
	}
	else {
		hwaverage = ''
	}

	if (hwaverage != '') {
		gradenofinal = 0.2 * hwaverage + 0.8 * std_grade;
		$('#gradenofinal').html( letterGrade(gradenofinal));
		finalexamgrade = $('#finalexamgrade').val()
		if (finalexamgrade != '') {
			finalgrade = 0.15 * hwaverage + 0.6 * std_grade + 0.25 * finalexamgrade;
			$('#finalgrade').html( letterGrade(finalgrade));
		}
		else {
			$('#finalgrade').html('');
		}
	}
	else {
		$('#gradenofinal').html('');
		$('#finalgrade').html('');
	}
}

function letterGrade(num) {
	if (num >= 93) letter = 'A';
	else if (num >= 90) letter = 'A-';
	else if (num >= 87) letter = 'B+';
	else if (num >= 83) letter = 'B';
	else if (num >= 80) letter = 'B-';
	else if (num >= 77) letter = 'C+';
	else if (num >= 73) letter = 'C';
	else if (num >= 70) letter = 'C-';
	else if (num >= 67) letter = 'D+';
	else if (num >= 63) letter = 'D';
	else if (num >= 60) letter = 'D-';
	else letter = 'F';
	return letter;
}
