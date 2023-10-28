// author: Alfredo Sánchez Alberca (asalber@ceu.es)
var dni;

function preprocess(){
	echo('library(wines)\n');
	echo('modify.unif <- function(var, min, max, decimals) {return(var + round(runif(length(var), min, max), decimals))}\n');
	echo('modify.norm <- function(var, mean, sd, decimals) {return(var + round(rnorm(length(var), mean, sd), decimals))}\n\n');
}

function calculate () {
	dni = getString("dni");
	echo('data(wines, package="wines")\n');
	echo('set.seed(' + dni + 2 + ')\n');
	echo('data.wines$fixed.acidity <- modify.unif(data.wines$fixed.acidity, -0.1, 0.1, 1)\n');
	echo('data.wines$volatile.acidity <- modify.unif(data.wines$volatile.acidity, -0.02, 0.02, 2)\n');
	echo('data.wines$citric.acid <- modify.unif(data.wines$citric.acid, -0.02, 0.02, 2)\n');
	echo('data.wines$residual.sugar <- modify.unif(data.wines$residual.sugar, -0.2, 0.2, 1)\n');
	echo('data.wines$sodium.chloride <- modify.unif(data.wines$sodium.chloride, -0.002, 0.002, 3)\n');
	echo('data.wines$free.sulfur.dioxide <- modify.unif(data.wines$free.sulfur.dioxide, -2, 2, 0)\n');
	echo('data.wines$total.sulfur.dioxide <- modify.unif(data.wines$total.sulfur.dioxide, -5, 5, 0)\n');
	echo('data.wines$density <- modify.unif(data.wines$density, -0.0002, 0.0002, 4)\n');
	echo('data.wines$ph <- modify.unif(data.wines$ph, -0.01, 0.01, 2)\n');
	echo('data.wines$sulfates <- modify.unif(data.wines$sulfates, -0.01, 0.01, 2)\n');
	echo('data.wines$alcohol <- modify.unif(data.wines$alcohol, -0.1, 0.1, 1)\n');
	echo('.GlobalEnv$data.wines.' + dni + '<- data.wines\n');
	echo('rm(data.wines, envir=.GlobalEnv)\n');
}

function printout () {
	echo('rk.header ("Data set for the Statistics homework", parameters=list("Data set name" = "data.wines.' + dni + '"))\n');
	echo('rk.print("A new data set has been generated in the workspace.")\n');
}

