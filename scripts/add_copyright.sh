#!/bin/bash

# Script to add copyright headers to all TypeScript and TypeScript React files
# Copyright (c) 2025 OryxForge Labs LLC
# CyberGuardians Junior - Cybersecurity Educational App for Children
# All rights reserved.

COPYRIGHT_HEADER='/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * CyberGuardians Junior - Cybersecurity Educational App for Children
 * All rights reserved.
 */

'

# Find all TypeScript and TypeScript React files
find src -name "*.ts" -o -name "*.tsx" | while read file; do
  echo "Adding copyright header to $file"
  
  # Create a temporary file
  temp_file=$(mktemp)
  
  # Add the copyright header followed by the original content
  echo -e "$COPYRIGHT_HEADER" > "$temp_file"
  cat "$file" >> "$temp_file"
  
  # Replace the original file with the temporary file
  mv "$temp_file" "$file"
done

echo "Copyright headers have been added to all TypeScript files."
