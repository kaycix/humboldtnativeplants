# humboldtnativeplants
Repository of information regarding Humboldt County California native plants

Plant ID is generated by performing "md5 | cut -c 1-5" on the lowercase, underscore-delineated scientific name.
eg. achillea_millefolium   28457

echo achillea_millefolium | md5 | cut -c 1-5

A command that processes all the plant names from the plants directory:
for i in $(ls -1 | sed 's#\(.*\).md#\1#g'); do echo $i " "  $(echo $i | md5 | cut -c 1-5); done;
