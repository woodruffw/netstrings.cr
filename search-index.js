crystal_doc_search_index_callback({"repository_name":"github.com/woodruffw/netstring.cr","body":"netstring.cr\n============\n\n![license](https://raster.shields.io/badge/license-MIT%20with%20restrictions-green.png)\n[![Build Status](https://img.shields.io/github/workflow/status/woodruffw/netstring.cr/CI/master)](https://github.com/woodruffw/netstring.cr/actions?query=workflow%3ACI)\n\nA Crystal implementation of [djb's netstrings](https://cr.yp.to/proto/netstrings.txt).\n\n## Installation\n\nAdd this to your application's `shard.yml`:\n\n```yaml\ndependencies:\n  netstring:\n    github: woodruffw/netstring.cr\n```\n\n## Usage\n\n```crystal\nrequire \"netstring\"\n\n# From a source string:\nns = Netstring.parse \"3:foo,\"\nns.size # => 3\nns.data # => Bytes[102, 111, 111]\nns.to_s # => \"foo\"\n\n# From an IO:\nns = Netstring.parse IO::Memory.new(\"bar\")\n```\n\n## Contributing\n\n1. Fork it (<https://github.com/woodruffw/netstring/fork>)\n2. Create your feature branch (`git checkout -b my-new-feature`)\n3. Commit your changes (`git commit -am 'Add some feature'`)\n4. Push to the branch (`git push origin my-new-feature`)\n5. Create a new Pull Request\n\n## Contributors\n\n- [woodruffw](https://github.com/woodruffw) William Woodruff - creator, maintainer\n","program":{"html_id":"github.com/woodruffw/netstring.cr/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"superclass":null,"ancestors":[],"locations":[],"repository_name":"github.com/woodruffw/netstring.cr","program":true,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"github.com/woodruffw/netstring.cr/Netstring","path":"Netstring.html","kind":"class","full_name":"Netstring","name":"Netstring","abstract":false,"superclass":{"html_id":"github.com/woodruffw/netstring.cr/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"github.com/woodruffw/netstring.cr/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"github.com/woodruffw/netstring.cr/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"netstring.cr","line_number":2,"url":"https://github.com/woodruffw/netstring.cr/blob/dfa7c7f01a463acde9e9b8a59c47458bfe496db2/src/netstring.cr"}],"repository_name":"github.com/woodruffw/netstring.cr","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[{"id":"NETSTRING_MAX","name":"NETSTRING_MAX","value":"999999999_u32","doc":"The default maximum netstring size, taken from the reference implementation.","summary":"<p>The default maximum netstring size, taken from the reference implementation.</p>"},{"id":"VERSION","name":"VERSION","value":"\"0.1.0\"","doc":"The current version of `netstring.cr`.","summary":"<p>The current version of <code>netstring.cr</code>.</p>"}],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":"The primary namespace for `netstring.cr`.","summary":"<p>The primary namespace for <code>netstring.cr</code>.</p>","class_methods":[{"id":"parse(input:String,max:UInt32=NETSTRING_MAX)-class-method","html_id":"parse(input:String,max:UInt32=NETSTRING_MAX)-class-method","name":"parse","doc":"Returns a new `Netstring` based on *input*.\n\n*max* is a user-specifiable maximum size for *input*, which can be\nset either above or below the default `NETSTRING_MAX`.\n\nRaises a `ParseError` on any parser failure.\n\n```\nns = Netstring.parse \"3:foo,\"\nns.size # => 3\nns.data # => Bytes[102, 111, 111]\nns.to_s # => \"foo\"\n```","summary":"<p>Returns a new <code><a href=\"Netstring.html\">Netstring</a></code> based on <em>input</em>.</p>","abstract":false,"args":[{"name":"input","doc":null,"default_value":"","external_name":"input","restriction":"String"},{"name":"max","doc":null,"default_value":"NETSTRING_MAX","external_name":"max","restriction":"UInt32"}],"args_string":"(input : String, max : UInt32 = <span class=\"t\">NETSTRING_MAX</span>)","source_link":"https://github.com/woodruffw/netstring.cr/blob/dfa7c7f01a463acde9e9b8a59c47458bfe496db2/src/netstring.cr#L91","def":{"name":"parse","args":[{"name":"input","doc":null,"default_value":"","external_name":"input","restriction":"String"},{"name":"max","doc":null,"default_value":"NETSTRING_MAX","external_name":"max","restriction":"UInt32"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"input = IO::Memory.new(input)\nparse(input, max: max)\n"}},{"id":"parse(input:IO,max:UInt32=NETSTRING_MAX)-class-method","html_id":"parse(input:IO,max:UInt32=NETSTRING_MAX)-class-method","name":"parse","doc":"Like the other `parse`, but takes an `IO` instead.\nSee `parse`.","summary":"<p>Like the other <code><a href=\"Netstring.html#parse(input:String,max:UInt32=NETSTRING_MAX)-class-method\">.parse</a></code>, but takes an <code>IO</code> instead.</p>","abstract":false,"args":[{"name":"input","doc":null,"default_value":"","external_name":"input","restriction":"IO"},{"name":"max","doc":null,"default_value":"NETSTRING_MAX","external_name":"max","restriction":"UInt32"}],"args_string":"(input : IO, max : UInt32 = <span class=\"t\">NETSTRING_MAX</span>)","source_link":"https://github.com/woodruffw/netstring.cr/blob/dfa7c7f01a463acde9e9b8a59c47458bfe496db2/src/netstring.cr#L98","def":{"name":"parse","args":[{"name":"input","doc":null,"default_value":"","external_name":"input","restriction":"IO"},{"name":"max","doc":null,"default_value":"NETSTRING_MAX","external_name":"max","restriction":"UInt32"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"length = parse_length_and_separator(input, max)\ndata = parse_data_and_terminator(input, length)\nnew(data)\n"}}],"constructors":[],"instance_methods":[{"id":"data:Slice(UInt8)-instance-method","html_id":"data:Slice(UInt8)-instance-method","name":"data","doc":"Returns the body of the netstring, as a slice.","summary":"<p>Returns the body of the netstring, as a slice.</p>","abstract":false,"args":[],"args_string":" : Slice(UInt8)","source_link":"https://github.com/woodruffw/netstring.cr/blob/dfa7c7f01a463acde9e9b8a59c47458bfe496db2/src/netstring.cr#L10","def":{"name":"data","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@data"}},{"id":"size-instance-method","html_id":"size-instance-method","name":"size","doc":"Returns the size of the parsed netstring.","summary":"<p>Returns the size of the parsed netstring.</p>","abstract":false,"args":[],"args_string":"","source_link":"https://github.com/woodruffw/netstring.cr/blob/dfa7c7f01a463acde9e9b8a59c47458bfe496db2/src/netstring.cr#L106","def":{"name":"size","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"data.size"}},{"id":"to_s(io)-instance-method","html_id":"to_s(io)-instance-method","name":"to_s","doc":"Returns a string containing the encoded contents of the netstring.\n\nNOTE: This will not fix or deduce the correct encoding for you. It assumes UTF-8.","summary":"<p>Returns a string containing the encoded contents of the netstring.</p>","abstract":false,"args":[{"name":"io","doc":null,"default_value":"","external_name":"io","restriction":""}],"args_string":"(io)","source_link":"https://github.com/woodruffw/netstring.cr/blob/dfa7c7f01a463acde9e9b8a59c47458bfe496db2/src/netstring.cr#L113","def":{"name":"to_s","args":[{"name":"io","doc":null,"default_value":"","external_name":"io","restriction":""}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"str = String.new(data)\nstr.to_s(io)\n"}}],"macros":[],"types":[{"html_id":"github.com/woodruffw/netstring.cr/Netstring/ParseError","path":"Netstring/ParseError.html","kind":"class","full_name":"Netstring::ParseError","name":"ParseError","abstract":false,"superclass":{"html_id":"github.com/woodruffw/netstring.cr/Exception","kind":"class","full_name":"Exception","name":"Exception"},"ancestors":[{"html_id":"github.com/woodruffw/netstring.cr/Exception","kind":"class","full_name":"Exception","name":"Exception"},{"html_id":"github.com/woodruffw/netstring.cr/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"github.com/woodruffw/netstring.cr/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"netstring.cr","line_number":13,"url":"https://github.com/woodruffw/netstring.cr/blob/dfa7c7f01a463acde9e9b8a59c47458bfe496db2/src/netstring.cr"}],"repository_name":"github.com/woodruffw/netstring.cr","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"github.com/woodruffw/netstring.cr/Netstring","kind":"class","full_name":"Netstring","name":"Netstring"},"doc":"Raised on any error while parsing a netstring.","summary":"<p>Raised on any error while parsing a netstring.</p>","class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[]}]}]}})