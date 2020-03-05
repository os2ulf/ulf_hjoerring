<?php

/**
 * Implements hook_preprocess_user_profile().
 */
function ulf_hjoerring_preprocess_user_profile(&$variables) {
  // Enable a view for user profile templates.
  $variables['content_by_user_educations']
    = views_embed_view('hjoerring_content_by_user', 'block_4');
  $variables['content_by_user_internships']
    = views_embed_view('hjoerring_content_by_user', 'block_3');

}
