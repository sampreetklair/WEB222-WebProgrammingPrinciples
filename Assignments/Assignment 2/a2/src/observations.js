/**
 * WEB222 – Assignment 02
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name: Sampreet Klair
 *      Student ID: 145031225
 *      Date: 8/10/2023
 *
 * Please see all unit tests in the files problem-01.test.js, problem-02.test.js, etc.
 */

/*******************************************************************************
 * Problem 0: learn how to work with the cases data.
 *
 * Welcome to Assignment 2! In this assignment, you're going to be practicing
 * different ways of working with JavaScript Objects, both built-in Objects
 * like Array and String, and also working with custom Objects you create.
 *
 * Before you dive into all the problems below, let's spend a minute helping you
 * learn how to work with the sample user data included in this assignment.
 *
 * We've included an extra file in this assignment: `data.js`.  This is data
 * that was obtained from the iNaturalist API.  iNaturalist is available at
 * https://www.inaturalist.org/ and lets people around the world share and track
 * sightings and helps identify plants, animals, insects, and other organisms.
 * It's a phenomenal tool for scientists and curious naturalists alike.
 *
 * The iNaturalist data is typical of a lot of data we use on the web: it's formatted
 * as an Object, with key/value pairs to express the data.  We use strings, numbers,
 * boolean, as well as Arrays and even Objects.  Learning how to traverse and
 * manipulate this data is important.
 *
 * Take a look at src/data.js now to get a sense of what the data looks like. This
 * data includes 10 observations for an area of 1km around the Seneca Newnham campus.
 */

/*******************************************************************************
 * Problem 00: Learning to write our tests
 *
 * Each of the functions below will be passed a `data` argument, which is
 * an Object returned by calling the iNaturalist API.  It looks something like
 * this:
 *
 * {
 *   total_results: 125,
 *   page: 1,
 *   per_page: 10,
 *   results: [
 *       ...observation results here...
 *   ]
 * }
 *
 * The data includes `total_results` (how many results there are). The results
 * are "paged," meaning that you are only seeing a subset of the total.  The
 * `page` indicates which page we are on, and `per_page` how many items there
 * are on each page. It also includes the Array of `results`.
 *
 * To get you started, write a function that accepts a full `data` Object and returns
 * only the `total_results` Number.
 *
 * You can try running this test using the following command:
 *
 * npm test problem-00
 *
 * See if you can get this test to pass by fixing the bug in the code below.
 ******************************************************************************/
function getTotalResults(data) {
  return data.total_results;
}

/*******************************************************************************
 * Problem 01 Part 1: use a for-loop to iterate over Arrays
 *
 * Write a function named `speciesCoordinates(data)` that loops over every
 * observation Object in the results array, and calls `console.log()`, passing
 * it a formatted String that looks like this:
 *
 * `"Muskrat" observed at coordinates (43.79248394,-79.33852796)`
 *
 * The formatted String above is made up of the following observation properties:
 *
 *   - species_guess
 *   - location
 *
 * In your solution, make use of a for-loop to iterate over results in data
 *
 * Your function shouldn't return anything, just call console.log()
 ******************************************************************************/
function speciesCoordinates(data) {
  const results = data.results;
  for (let i = 0; i < results.length; i++) {
    const observation = results[i];
    const speciesGuess = observation.species_guess;
    const location = observation.location;
    console.log(`"${speciesGuess}" observed at coordinates (${location})`);
  }
}

/*******************************************************************************
 * Problem 01 Part 2: use forEach() to iterate over Arrays
 *
 * Rewrite your code from `speciesCoordinates(data)` above to use .forEach()
 * instead of a for-loop.  Everything else should be identical.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 ******************************************************************************/
function speciesCoordinates2(data) {
  const results = data.results; // Get the array of results
  results.forEach((observation) => {
    const speciesGuess = observation.species_guess;
    const location = observation.location;
    console.log(`"${speciesGuess}" observed at coordinates (${location})`);
  });
}

/*******************************************************************************
 * Problem 01 Part 3: use a for-of loop to iterate over Arrays
 *
 * Rewrite your code from `speciesCoordinates(data)` above to use a for-of
 * loop.  Make one additional change: the `location` information should now
 * have a space after the comma:
 *
 * `"Muskrat" observed at coordinates (43.79248394, -79.33852796)`
 *
 * Everything else should be identical.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 ******************************************************************************/
function speciesCoordinates3(data) {
  const results = data.results;
  for (const observation of results) {
    const speciesGuess = observation.species_guess;
    const location = observation.location;
    const [lat, lng] = location.split(',');
    console.log(`"${speciesGuess}" observed at coordinates (${lat.trim()}, ${lng.trim()})`);
  }
}

/*******************************************************************************
 * Problem 02 Part 1: observationsByQualityGrade(data, qualityGrade)
 *
 * iNaturalist users can assign a quality grade to an observation they make.
 * The quality grade can be "research", "needs_id", "casual", or null
 * (i.e., unspecified).
 *
 * Write a function that takes Observation data, as well as a qualityGrade value.
 * The qualityGrade value describes the quality of the observation data.
 *
 * If the qualityGrade value isn't one of "research", "needs_id", "casual", or null
 * throw an error.  Make sure you deal with UPPER- and lower-case versions of the
 * strings when checking.
 *
 * Return a new Array with only those observation Objects that contain a quality_grade
 * value that matches the qualityGrade argument to your function.  For example:
 *
 * observationsByQualityGrade(data, "research") would return an Array of observation
 * objects that have `quality_grade: "research"`.
 *
 * observationsByQualityGrade(data, null) would return an Array of observation
 * objects that have `quality_grade: null`.
 *
 * observationsByQualityGrade(data, "RESEARCH") would return an Array of observation
 * objects that have `quality_grade: "research"` (i.e., UPPERCASE qualityGrade values
 * should be converted to lowercase).
 *
 * In your solution, make use of the following:
 *
 *  - make sure that qualityGrade is of the right type and value, or throw an Error
 *  - create an empty array
 *  - if an observation includes the given quality_grade value, add the observation
 *    Object to the empty Array. Make sure you deal with both UPPER and lowercase
 *    qualityGrade values: all quality_grade values on the observations are lowercase.
 *
 * Your function should return the newly created Array.
 ******************************************************************************/
function observationsByQualityGrade(data, qualityGrade) {
  if (qualityGrade === null) {
    qualityGrade = null;
  } else if (typeof qualityGrade === 'string') {
    qualityGrade = qualityGrade.toLowerCase();
  } else {
    throw new Error('Invalid qualityGrade type');
  }
  const allowedQualityGrades = ['research', 'needs_id', 'casual', null];
  qualityGrade = qualityGrade ? qualityGrade.toLowerCase() : null;

  if (!allowedQualityGrades.includes(qualityGrade)) {
    throw new Error('Invalid quality grade');
  }

  const filteredObservations = data.results.filter((observation) => {
    const observationQualityGrade = observation.quality_grade;
    return observationQualityGrade === qualityGrade;
  });

  return filteredObservations;
}

/*******************************************************************************
 * Problem 02 Part 2: observationsByQualityGrades(data, ...qualityGrades)
 *
 * Modify your function from Part 02 Part 1 so that you can pass more than one
 * qualityGrade to the function. For example
 *
 * observationsByQualityGrade(data, "research", "needs_id") would return an Array
 * of observation objects that have `quality_grade: "research"` OR
 * `quality_grade: "needs_id"`.
 *
 * Everything else should work the same way, but you can now use 1 or more
 * qualityGrade values.
 *
 * If the number of qualityGrade values passed to the function is less than 1,
 * throw an error.
 *
 * In your solution, you should call your observationsByQualityGrade() function
 * from above (i.e., don't rewrite the same logic again).
 ******************************************************************************/
function observationsByQualityGrades(data, ...qualityGrades) {
  if (qualityGrades.length < 1) {
    throw new Error('At least one quality grade must be provided');
  }

  const filteredObservations = qualityGrades.flatMap((qualityGrade) =>
    observationsByQualityGrade(data, qualityGrade)
  );

  return filteredObservations;
}

/*******************************************************************************
 * Problem 3 Part I: transformObservation(original)
 *
 * Write a function to transform a result into a new Object format.
 *
 * The `transformObservation(original)` function takes an observation Object that
 * looks like the values in src/data.js, and transforms the data into a new Object
 * that looks like this (see comments on right-hand side with details):
 *
 * {
 *   id: 67868131,                           // copy the id over without modification
 *   name: 'muskrat',                        // species_guess renamed, lower case
 *   isExtinct: true,                        // true if conservation_status' status_name is 'extinct in the wild', false otherwise
 *   images: [{                              // modify photos to be Array of URLs and attribution details
 *     url: 'https://static.inaturalist.org/photos/109762131/square.jpg?1610308133',
 *      copyright: '(c) dridgen, some rights reserved (CC BY-NC)',
 *   }]
 *   observer: 'dridgen@inaturalist.com'     // the user's login_exact name with @inaturalist.com suffix
 * }
 ******************************************************************************/
function transformObservation(original) {
  const transformedObservation = {
    id: original.id,
    name: original.species_guess.toLowerCase(),
    isExtinct: original.conservation_status
      ? original.conservation_status.status_name === 'extinct in the wild'
      : false,
    images: [],
    observer: `${original.user.login_exact}@inaturalist.com`
  };

  if (original.photos) {
    transformedObservation.images = original.photos.map((photo) => ({
      url: photo.url,
      copyright: photo.attribution || ''
    }));
  }

  return transformedObservation;
}

/*******************************************************************************
 * Problem 3 Part II: transformObservations(data) with iteration
 *
 * The `transformObservations(data)` function takes observation data and uses it
 * to create and return a new Array of transformed observation Objects,
 * calling the transformObservation() function you wrote above on each one.
 *
 * In your solution, make use of the following:
 *
 *  - create a new empty Array to hold all the transformed cases
 *  - use a for-loop or .forEach() method to loop over all Objects in the data results Array
 *  - pass each observation Object to your transformObservation() function to get a new Object
 *  - add the new, transformed Object to your array
 *  - return the new Array containing all the transformed Objects
 ******************************************************************************/
function transformObservations(data) {
  const transformedObservations = [];

  data.results.forEach((observation) => {
    const transformedObservation = transformObservation(observation);

    transformedObservations.push(transformedObservation);
  });

  return transformedObservations;
}

/*******************************************************************************
 * Problem 3 Part III: transformObservations2(data) with .map()
 *
 * Rewrite your transformObservations() function from above a second time using
 * the Array .map() method see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 *
 * In your solution, make use of the following:
 *
 *  - use the .map() method of the data results Array to create a new Array
 *  - In the .map() method's function, call your transformObservation() function
 *  - return the Array created by the .map() method
 ******************************************************************************/
function transformObservations2(data) {
  const transformedObservations = data.results.map((observation) => {
    return transformObservation(observation);
  });

  return transformedObservations;
}

/*******************************************************************************
 * Problem 04: getObservationsByTaxa()
 *
 * Write a function to get the observation Object(s) for a given taxon name, or
 * list of taxa (names). Your function should support the following taxa values:
 *
 * - Animalia (i.e., animals)
 * - Aves (i.e., birds, subset of Animalia)
 * - Insecta (i.e., insects, subset of Animalia)
 * - Plantae (i.e., plants)
 *
 * Anything else should be considered unknown (NOTE: there are other possible
 * values we could include, but we are limiting the scope of this function).
 *
 * Calling getObservationsByTaxa() with a single `taxon` value should return the
 * observation Objects that have that taxon name. For example:
 *
 * getObservationsByTaxa(data, 'Animalia') would return Objects in the
 * results Array with a taxon iconic_taxon_name property matching 'Animalia'.
 *
 * Similarly, if a single unknown taxon name value is passed, return an empty list:
 *
 * getObservationsByTaxa(data, 'Unknown') would return [] (the empty array).
 *
 * Finally, getObservationsByTaxa(data, 'Animalia', 'Plantae') would return an
 * Array of observation Objects, whose taxon match the taxa names specified. If
 * any of the taxa names in the list are unknown, skip this taxon name and don't
 * add anything to the returned Array.  As a result, the following functions
 * would return the same list:
 *
 * getObservationByTaxon(data, 'Animalia', 'Plantae', 'Unknown')
 * getObservationByTaxon(data, 'Animalia', 'Plantae')
 *
 * In your solution, make use of the following:
 *
 *  - use the .forEach() method to iterate over all taxa names passed to your function
 *  - use the .filter() method to locate items by taxon name, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 ******************************************************************************/
function getObservationsByTaxa(data, ...taxaNames) {
  const matchingObservations = [];

  taxaNames.forEach((taxonName) => {
    const observations = data.results.filter((observation) => {
      return observation.taxon.iconic_taxon_name.toLowerCase() === taxonName.toLowerCase();
    });

    matchingObservations.push(...observations);
  });

  return matchingObservations;
}

/*******************************************************************************
 * Problem 05: getObservationsByLocation()
 *
 * Write a function that filters observations according to their location.
 * iNaturalist allows users to give a latitude and longitude for the location.
 *
 * Your function should accept iNaturalist data, and an options Object, which
 * may contain various location filtering options.  The return value is an Array of
 * observations, whose latitude and longitude values match the options provided.
 * For example:
 *
 * getObservationsByLocation(data, { lat: 43.65, lng: -79.38 }) means only return
 * observations whose latitude is 43.65 and longitude is -79.38 exactly.
 *
 * getObservationsByLocation(data, { lat: { min: 43, max: 44 }, lng: { min: -80, max: -79 } })
 * means only return observations whose latitude is greater than or equal to 43
 * AND less than or equal to 44, and whose longitude is greater than or equal to -80
 * AND less than or equal to -79.
 *
 * If no options object is given, or none of the expect values are present (i.e.
 * lat, lng), then return all values.
 *
 * Use the Array .filter() function in your solution.
 ******************************************************************************/
function getObservationsByLocation(data, options = {}) {
  // TODO
  const results = data.results;
  const { eq, gt, lt } = options;

  if (!eq && !gt && !lt) {
    return results;
  }
  return results.filter((observation) => {
    const { Location } = observation;
    if (eq !== undefined) {
      return Location === eq;
    }
    if (gt !== undefined && lt !== undefined) {
      return Location >= gt && Location <= lt;
    }
    if (gt !== undefined) {
      return Location > gt;
    }
    if (lt !== undefined) {
      return Location < lt;
    }
    return false;
  });
}

/*******************************************************************************
 * Problem 06: getPlaceURLs()
 *
 * Write a function to create an array of URLs for looking up observations for
 * specific places using the iNaturalist results data and place_ids.
 *
 * When users record observations, they include information about the location.
 * Within iNaturalist's database, all places have a numeric id called a `place_id`.
 * For example:
 *
 *  - Canada = 6712
 *  - Ontario = 6883
 *  - Toronto = 134748
 *
 * An observation will usually include many place_ids.  For example, you might
 * record an observation in Toronto, which is also in Ontario, which is also in
 * Canada, etc.
 *
 * The results data includes a property named `place_ids` that lists all of the
 * relevant place_ids for the observation:
 *
 * place_ids: [
 *       6712, 6883, 9853, 27593, 57637, 59613, 59651, 59954, 59956, 61551,
 *       64422, 64423, 66741, 82257, 97394, 129309, 130989, 134744, 134748
 * ]
 *
 * Convert each observation's place_ids into a URL of the following form:
 *
 *      https://www.inaturalist.org/observations?place_id={place_id}
 *
 * For example, all observations for the City of Toronto are available at:
 *
 *      https://www.inaturalist.org/observations?place_id=134748
 *
 * The array you create will look like this:
 *
 * [
 *   'https://www.inaturalist.org/observations?place_id=6712',
 *   'https://www.inaturalist.org/observations?place_id=6883',
 *   'https://www.inaturalist.org/observations?place_id=134748',
 *   ...and so on
 * ]
 *
 * Your function should return an Array of these new URLs:
 ******************************************************************************/
function getPlaceURLs(data) {
  const results = data.results;
  const placeURLs = [];

  for (const observation of results) {
    const placeIds = observation.place_ids;

    for (const placeId of placeIds) {
      const url = `https://www.inaturalist.org/observations?place_id=${placeId}`;
      placeURLs.push(url);
    }
  }

  return placeURLs;
}

/*******************************************************************************
 * Problem 07: getSpeciesObservations()
 *
 * Write a function to get the number of observations for each species in the
 * data results Array. Each observation has a `taxon` property, for example:
 *
 * {
 *   taxon: {
 *     id: 216168,
 *     name: 'Canis lupus',
 *     rank: 'species',
 *     ancestor_ids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
 *     iconic_taxon_name: 'Mammalia',
 *     preferred_common_name: 'Gray Wolf'
 *   }
 * }
 *
 * In the above example, the observation has the following properties that we are
 * interested in collecting:
 *
 * name: 'Canis lupus',                  // scientific name of the species
 *
 * Your function should loop through all observation Objects and get the `taxon`
 * property.  Using the `taxon`, get the name, and use it to count the number of
 * observations for each species.  Your function should return an Object with
 * these counts, which looks like this:
 *
 * {
 *   'Canis lupus': 10,                 // the total number of 'Canis lupus' observations
 *   'Ursus arctos': 5,                 // the total number of 'Ursus arctos' observations
 *   'Puma concolor': 8,                // the total number of 'Puma concolor' observations
 *   // ...
 * }
 ******************************************************************************/
function getSpeciesObservations(data) {
  const results = data.results;
  const speciesCounts = {};

  for (const observation of results) {
    const taxon = observation.taxon;
    if (taxon && taxon.name) {
      const speciesName = taxon.name;

      speciesCounts[speciesName] = (speciesCounts[speciesName] || 0) + 1;
    }
  }

  return speciesCounts;
}

/**
 * Problem 08: Part 1 - extractSpeciesNames()
 *
 * Write a function to extract all species names from the iNaturalist observation results.
 * The species names are available in each result's `species_guess` property.
 *
 * Your function should loop through all of the results in `data` and get the
 * species names, placing them in an Array.
 *
 * You should not put any duplicate names in your new Array.
 *
 * When you have processed all results, and collected all unique species names,
 * return the Array of species names.
 */
function extractSpeciesNames(data) {
  const results = data.results;
  const speciesNamesSet = new Set();

  for (const observation of results) {
    const speciesGuess = observation.species_guess;

    if (speciesGuess) {
      speciesNamesSet.add(speciesGuess);
    }
  }

  const speciesNamesArray = Array.from(speciesNamesSet);
  return speciesNamesArray;
}

/**
 * Problem 08: Part 2 - extractSpeciesNames2()
 *
 * Rewrite your `extractSpeciesNames` function from above, but do not use an Array
 * to hold the species names.  Instead, use a Set, see:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 *
 * Your function should store all unique species names in a Set, and when you are done
 * processing all results, convert your Set to an Array and return it. See:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
 */

function extractSpeciesNames2(data) {
  const results = data.results;
  const speciesNamesSet = new Set();
  for (const observation of results) {
    const speciesGuess = observation.species_guess;

    if (speciesGuess) {
      speciesNamesSet.add(speciesGuess);
    }
  }
  return Array.from(speciesNamesSet);
}

// Our unit test files need to access the functions we defined
// above, so we export them here.
exports.getTotalResults = getTotalResults;
exports.speciesCoordinates = speciesCoordinates;
exports.speciesCoordinates2 = speciesCoordinates2;
exports.speciesCoordinates3 = speciesCoordinates3;
exports.observationsByQualityGrade = observationsByQualityGrade;
exports.observationsByQualityGrades = observationsByQualityGrades;
exports.transformObservation = transformObservation;
exports.transformObservations = transformObservations;
exports.transformObservations2 = transformObservations2;
exports.getObservationsByTaxa = getObservationsByTaxa;
exports.getObservationsByLocation = getObservationsByLocation;
exports.getPlaceURLs = getPlaceURLs;
exports.getSpeciesObservations = getSpeciesObservations;
exports.extractSpeciesNames = extractSpeciesNames;
exports.extractSpeciesNames2 = extractSpeciesNames2;
