exports.arrayToList = (array, join = ', ', final = ' and ') => {
  const arr = array.slice(0)

  const last = arr.pop()

  if (array.length > 1) {
    return arr.join(join) + final + last
  }

  return last
}

exports.slugify = (text) => {
  return text.trim()
    .toLowerCase()
    // remove non-word [a-z0-9_], non-whitespace, non-hyphen characters
    .replace(/[^\w\s-]/g, '')
    // swap any length of whitespace, underscore, hyphen characters with a single -
    .replace(/[\s_-]+/g, '-')
    // remove leading, trailing -
    .replace(/^-+|-+$/g, '')
}

exports.arrayToDateObject = (array) => {
  return new Date(array[2], array[1] - 1, array[0])
}

exports.getCheckboxValues = (name, data) => {
  return name && (Array.isArray(name)
    ? name
    : [name].filter((name) => {
        return name !== '_unchecked'
      })) || data && (Array.isArray(data) ? data : [data])
}

exports.removeFilter = (value, data) => {
  // do this check because if coming from overview page for example,
  // the query/param will be a string value, not an array containing a string
  if (Array.isArray(data)) {
    return data.filter(item => item !== value)
  } else {
    return null
  }
}

exports.getFilterALabel = (code) => {
  let label = code

  return label
}

exports.getFilterBLabel = (code) => {
  let label = code

  return label
}

exports.getFilterCLabel = (code) => {
  let label = code

  return label
}

exports.getAgeRangeFilterItems = (subjectLevel = 'secondary', selectedItems) => {
  const items = []

  let options = require('../data/age-ranges')
  if (subjectLevel) {
    options = options.filter(range => range.level === subjectLevel)
  }

  options.forEach((option, i) => {
    const item = {}

    item.text = option.name
    item.value = option.code
    item.id = option.id
    item.checked = (selectedItems && selectedItems.includes(option.code)) ? 'checked' : ''

    items.push(item)
  })

  return items
}

exports.getGenderFilterItems = (selectedItems) => {
  const options = [
    {
      id: '0ec5b356-55b6-4f49-bc14-c978ebbe3790',
      text: 'Boys',
      value: 'boys'
    },
    {
      id: '17afadc9-97b2-46fc-9737-e24063da2d1f',
      text: 'Girls',
      value: 'girls'
    },
    {
      id: '6a1c523a-1bdd-49a2-a691-b152cf838303',
      text: 'Mixed',
      value: 'mixed'
    }
  ]

  const items = []

  options.forEach((option, i) => {
    const item = {}

    item.text = option.text
    item.value = option.value
    item.id = option.id
    item.checked = (selectedItems && selectedItems.includes(option.value)) ? 'checked' : ''

    items.push(item)
  })

  return items
}

exports.getAdmissionsPolicyFilterItems = (selectedItems) => {
  const options = [
    {
      id: '32e3fa4d-0488-4577-b981-5d2eaf936d14',
      text: 'Selective',
      value: 'selective'
    },
    {
      id: 'e23d8005-d94a-4bb9-9752-b83c63b24c27',
      text: 'Non-selective',
      value: 'non-selective'
    },
    {
      id: '63830a1b-5890-4bbd-b4e0-54d2ee763ce6',
      text: 'Not applicable',
      value: 'not applicable'
    },
    {
      id: '6a81936a-1d3a-4dbd-8f2e-a1c2f6af1993',
      text: 'Unknown',
      value: 'unknown'
    }
  ]

  const items = []

  options.forEach((option, i) => {
    const item = {}

    item.text = option.text
    item.value = option.value
    item.id = option.id
    item.checked = (selectedItems && selectedItems.includes(option.value)) ? 'checked' : ''

    items.push(item)
  })

  return items
}

exports.getSelectedSubjectItems = (selectedItems, baseHref = '/results') => {
  const items = []

  selectedItems.forEach((item) => {
    const subject = {}
    subject.text = item.text
    subject.href = `${baseHref}/remove-subject-filter/${item.value}`

    items.push(subject)
  })

  return items
}

exports.getKeyStageFilterItems = (subjectLevel = 'secondary', selectedItems) => {
  const items = []

  let options = require('../data/key-stages')
  if (subjectLevel) {
    options = options.filter(stage => stage.level === subjectLevel)
  }

  options.forEach((option, i) => {
    const item = {}

    item.text = option.name
    item.value = option.code
    item.id = option.id
    item.checked = (selectedItems && selectedItems.includes(option.code)) ? 'checked' : ''

    items.push(item)
  })

  return items
}
