module.exports = {
  'compile': [
    'compile:vectors',
    'compile:css',
    'compile:js'
  ],
  'compile:css': [
    'sass',
    'cmq',
    'newer:cssmin:css'
  ],
  'compile:js': [
    'newer:concat:js',
    'newer:jshint',
    'newer:uglify'
  ],
  'compile:vectors': [
    'grunticon',
    'newer:cssmin:grunticon'
  ],
  'default': [
    'compile',
    'watch'
  ],
  'sitemap': [
    'shell:createSitemapList',
    'newer:concat:sitemap'
  ],
  'snapshot': [
    'clean:presnapshots',
    'htmlSnapshot',
    'htmlmin:snapshots',
    'clean:postsnapshots',
    'sitemap'
  ]
};
